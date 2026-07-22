import { getDictionary, formatTranslation, resolveTranslation } from './i18n/dictionaries';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function t(dict, key, params) {
  const template = resolveTranslation(dict, key) || key;
  return params ? formatTranslation(template, params) : template;
}

export function buildContactEmail({ fullName, email, website, message, locale, sourceSite }) {
  const siteName = process.env.SITE_NAME || 'Traceability';
  // Mesajın hangi siteden/şirketten geldiğini belirtir. Çağıran taraf request'ten
  // (örn. req.headers.get('host') veya sabit bir env değeri) doldurup geçmeli.
  const source = sourceSite || siteName;
  const dict = getDictionary(locale || 'ro');

  const subject = `[${source}] ${siteName} - ${fullName}`;

  const heading = t(dict, 'email.heading');
  const lblName = t(dict, 'email.fullName');
  const lblEmail = t(dict, 'email.emailLabel');
  const lblWebsite = t(dict, 'email.websiteLabel');
  const lblMessage = t(dict, 'email.messageLabel');
  const lblSource = t(dict, 'email.sourceLabel');
  const footer = t(dict, 'email.footer', { siteName });

  // --- Düz metin versiyonu (değişmedi) ---
  const text = [
    heading,
    '',
    `${lblSource}: ${source}`,
    `${lblName}: ${fullName}`,
    `${lblEmail}: ${email}`,
    `${lblWebsite}: ${website || '-'}`,
    '',
    `${lblMessage}:`,
    message,
    '',
    '---',
    footer,
  ].join('\n');

  // --- HTML versiyonu: kart tasarımlı, e-posta istemcileriyle uyumlu ---
  const row = (label, value) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
        <span style="display:block;font-size:12px;font-weight:600;color:#8a94a6;text-transform:uppercase;letter-spacing:.03em;margin-bottom:4px;">
          ${escapeHtml(label)}
        </span>
        <span style="display:block;font-size:14px;color:#1f2430;">
          ${value}
        </span>
      </td>
    </tr>`;

  const html = `
  <!DOCTYPE html>
  <html lang="${escapeHtml(locale || 'ro')}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Segoe UI, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.06);">

            <!-- Header -->
            <tr>
              <td style="background:#1f2430;padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <span style="color:#ffffff;font-size:18px;font-weight:700;">${escapeHtml(siteName)}</span>
                      <div style="color:#c4c9d4;font-size:13px;margin-top:4px;">${escapeHtml(heading)}</div>
                    </td>
                    <td align="right" valign="top">
                      <span style="display:inline-block;background:#2563eb;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:6px 12px;border-radius:999px;white-space:nowrap;">
                        ${escapeHtml(source)}
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row(lblSource, escapeHtml(source))}
                  ${row(lblName, escapeHtml(fullName))}
                  ${row(lblEmail, `<a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a>`)}
                  ${row(lblWebsite, website ? escapeHtml(website) : '-')}
                </table>

                <div style="margin-top:20px;">
                  <span style="display:block;font-size:12px;font-weight:600;color:#8a94a6;text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px;">
                    ${escapeHtml(lblMessage)}
                  </span>
                  <div style="background:#f9fafb;border:1px solid #eef0f2;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;color:#1f2430;">
                    ${escapeHtml(message).replaceAll('\n', '<br/>')}
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #eef0f2;">
                <span style="font-size:12px;color:#8a94a6;">
                  ${escapeHtml(footer).replace(escapeHtml(siteName), `<strong style="color:#1f2430;">${escapeHtml(siteName)}</strong>`)}
                </span>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  return { subject, text, html };
}