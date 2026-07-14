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

export function buildContactEmail({ fullName, email, message, sourceSite, locale }) {
  const siteName = process.env.SITE_NAME || 'Traceability';
  const dict = getDictionary(locale || 'ro');

  const subject = `${siteName} - ${fullName}`;

  const heading = t(dict, 'email.heading');
  const lblName = t(dict, 'email.fullName');
  const lblEmail = t(dict, 'email.emailLabel');
  const lblMessage = t(dict, 'email.messageLabel');
  const footer = t(dict, 'email.footer', { siteName });
  const safeSourceSite = sourceSite ? String(sourceSite).trim() : '-';

  const text = [
    heading,
    '',
    `${lblName}: ${fullName}`,
    `${lblEmail}: ${email}`,
    `Source Site: ${safeSourceSite}`,
    '',
    `${lblMessage}:`,
    message,
    '',
    '---',
    footer,
  ].join('\n');

  const html = `
    <h2>${escapeHtml(heading)}</h2>
    <p><strong>${escapeHtml(lblName)}:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>${escapeHtml(lblEmail)}:</strong> ${escapeHtml(email)}</p>
    <p><strong>Kaynak Site:</strong> ${escapeHtml(safeSourceSite)}</p>
    <p><strong>${escapeHtml(lblMessage)}:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br/>')}</p>
    <hr style="margin-top:32px;border:none;border-top:1px solid #e0e0e0;" />
    <p style="font-size:12px;color:#888;">${escapeHtml(footer).replace(escapeHtml(siteName), `<strong>${escapeHtml(siteName)}</strong>`)}</p>
  `;

  return { subject, text, html };
}
