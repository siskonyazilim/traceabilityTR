import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function getRequestId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function getMissingSmtpKeys(config) {
  return Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function validatePayload(payload) {
  const firstName = String(payload?.firstName || '').trim();
  const lastName = String(payload?.lastName || '').trim();
  const email = String(payload?.email || '').trim();
  const website = String(payload?.website || '').trim();
  const message = String(payload?.message || '').trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (firstName.length < 2 || lastName.length < 2 || !isEmailValid || message.length < 10) {
    return null;
  }

  return { firstName, lastName, email, website, message };
}

export async function POST(request) {
  const requestId = getRequestId();
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpTo = process.env.SMTP_TO || smtpUser;
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

  let json;
  try {
    json = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: 'Gecersiz istek govdesi.', requestId },
      { status: 400 }
    );
  }

  const payload = validatePayload(json);
  if (!payload) {
    return Response.json(
      { ok: false, message: 'Form verileri gecersiz.', requestId },
      { status: 400 }
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

  const textBody = [
    'Yeni iletisim formu mesaji alindi.',
    '',
    `Ad Soyad: ${fullName}`,
    `E-posta: ${payload.email}`,
    `Website: ${payload.website || '-'}`,
    '',
    'Mesaj:',
    payload.message,
  ].join('\n');

  const htmlBody = `
    <h2>Yeni iletisim formu mesaji alindi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Website:</strong> ${escapeHtml(payload.website || '-')}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll('\n', '<br/>')}</p>
  `;

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: payload.email,
      subject: `Yeni mesaj - ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    return Response.json({ ok: true, requestId });
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
