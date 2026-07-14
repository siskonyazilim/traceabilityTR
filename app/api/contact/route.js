import nodemailer from 'nodemailer';
import { cookies } from 'next/headers';
import { buildContactEmail } from '../../../lib/email-template';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_PAYLOAD_SIZE = 50 * 1024;
const TOO_FAST = 3_000;
const TOO_OLD = 30 * 60_000;
const BOT_SCORE_THRESHOLD = 50;
const rateLimitMap = new Map();

function getRequestId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip) {
  const now = Date.now();

  if (rateLimitMap.size > 10_000) {
    for (const [key, entry] of rateLimitMap) {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function computeBotRisk({ elapsed, hasReferer, hasUserAgent }) {
  let score = 0;
  if (elapsed < 5_000) score += 40;
  if (elapsed > 20 * 60_000) score += 20;
  if (!hasReferer) score += 15;
  if (!hasUserAgent) score += 25;
  return score;
}

function getMissingSmtpKeys(config) {
  return Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);
}

function validatePayload(payload) {
  const firstName = String(payload?.firstName || '').trim();
  const lastName = String(payload?.lastName || '').trim();
  const email = String(payload?.email || '').trim();
  const phone = String(payload?.phone || '').trim();
  const company = String(payload?.company || '').trim();
  const message = String(payload?.message || '').trim();
  const locale = String(payload?.locale || 'ro').trim();
  const sourceSite = String(payload?.sourceSite || '').trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (firstName.length < 2 || lastName.length < 2 || !isEmailValid || message.length < 10) {
    return null;
  }

  return {
  firstName,
  lastName,
  phone,
  company,
  email,
  message,
  sourceSite,
  locale,
};
}

export async function POST(request) {
  const requestId = getRequestId();
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, message: 'Too many requests. Please try again later.', requestId },
      { status: 429 }
    );
  }

  const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
  if (contentLength > MAX_PAYLOAD_SIZE) {
    return Response.json(
      { ok: false, message: 'Payload too large.', requestId },
      { status: 413 }
    );
  }

  let json;
  try {
    json = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: 'Gecersiz istek govdesi.', requestId },
      { status: 400 }
    );
  }

  if (json._hp) {
    return Response.json({ ok: true, requestId });
  }

  const cookieStore = await cookies();
  const cookieCsrf = cookieStore.get('csrf_token')?.value;
  const headerCsrf = request.headers.get('x-csrf-token');
  const bodyCsrf = json.csrfToken;

  if (!cookieCsrf || !headerCsrf || cookieCsrf !== headerCsrf || cookieCsrf !== bodyCsrf) {
    return Response.json(
      { ok: false, message: 'CSRF validation failed.', requestId },
      { status: 403 }
    );
  }

  const submittedAt = Number(json.submittedAt);
  const elapsed = Date.now() - submittedAt;

  if (!submittedAt || isNaN(elapsed) || elapsed < TOO_FAST || elapsed > TOO_OLD) {
    return Response.json(
      { ok: false, message: 'Form timing invalid.', requestId },
      { status: 400 }
    );
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const turnstileToken = json.turnstileToken;
    if (!turnstileToken) {
      return Response.json(
        { ok: false, message: 'Turnstile token missing.', requestId },
        { status: 400 }
      );
    }
    try {
      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
            remoteip: ip,
          }),
        }
      );
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return Response.json(
          { ok: false, message: 'Turnstile verification failed.', requestId },
          { status: 403 }
        );
      }
    } catch (err) {
      console.error('[contact-api] Turnstile verification error', {
        requestId,
        message: err?.message,
      });
      return Response.json(
        { ok: false, message: 'Turnstile verification error.', requestId },
        { status: 500 }
      );
    }
  }

  const botScore = computeBotRisk({
    elapsed,
    hasReferer: !!request.headers.get('referer'),
    hasUserAgent: !!request.headers.get('user-agent'),
  });

  if (botScore >= BOT_SCORE_THRESHOLD) {
    return Response.json(
      { ok: false, message: 'Request rejected.', requestId },
      { status: 403 }
    );
  }

  const payload = validatePayload(json);
  if (!payload) {
    return Response.json(
      { ok: false, message: 'Form verileri gecersiz.', requestId },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO || process.env.CONTACT_TO || smtpUser;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpRequireTLS = process.env.SMTP_REQUIRE_TLS === 'true';

  const missingSmtpKeys = getMissingSmtpKeys({
    SMTP_HOST: smtpHost,
    SMTP_USER: smtpUser,
    SMTP_PASS: smtpPass,
    SMTP_TO: smtpTo,
    SMTP_FROM: smtpFrom,
  });

  if (missingSmtpKeys.length > 0) {
    console.error('[contact-api] Missing SMTP configuration', {
      requestId,
      missingSmtpKeys,
    });
    return Response.json(
      { ok: false, message: 'SMTP ayarlari eksik.', requestId },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    requireTLS: smtpRequireTLS,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const { subject, text, html } = buildContactEmail({
    fullName,
    email: payload.email,
    message: payload.message,
    locale: payload.locale,
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    const response = Response.json({ ok: true, requestId });
    response.headers.set(
      'Set-Cookie',
      'csrf_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict'
    );
    return response;
  } catch (error) {
    console.error('[contact-api] Mail send failed', {
      requestId,
      name: error?.name,
      code: error?.code,
      command: error?.command,
      message: error?.message,
    });

    return Response.json(
      { ok: false, message: 'Mesaj gonderilemedi.', requestId },
      { status: 500 }
    );
  }
}
