export async function GET() {
  const hasSmtpConfig = Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      (process.env.SMTP_TO || process.env.SMTP_USER) &&
      (process.env.SMTP_FROM || process.env.SMTP_USER)
  );

  return Response.json(
    {
      status: 'ok',
      contactForm: {
        smtpConfigured: hasSmtpConfig,
      },
    },
    { status: 200 }
  );
}
