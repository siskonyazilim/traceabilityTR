const isDev = process.env.NODE_ENV !== 'production'

// CSP şimdilik yalnız raporlama modunda (Report-Only): hiçbir şeyi engellemez,
// ihlalleri tarayıcı konsoluna yazar. Konsol temiz kalınca başlık adı
// 'Content-Security-Policy' yapılarak zorunlu moda geçilebilir.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://cdn.cerezgo.com https://www.googletagmanager.com https://*.google-analytics.com https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline' https://cdn.cerezgo.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' https:",
  "connect-src 'self' https://cdn.cerezgo.com https://*.cerezgo.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://challenges.cloudflare.com https://traceabilitydb.domainmanager.com.tr",
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com https://challenges.cloudflare.com",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const securityHeaders = [
  // includeSubDomains/preload bilerek yok: tüm alt alan adlarının HTTPS olduğu doğrulanmadan eklenmemeli
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'Content-Security-Policy-Report-Only', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  output: 'standalone',
  images: {
    qualities: [62, 75, 78, 82, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'traceabilitydb.domainmanager.com.tr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'traceability.com.tr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.traceability.com.tr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
    ],
  },
  // Canonical host: https://www.traceability.com.tr
  // non-www → www (301) yönlendirmesi Cloudflare tarafında yapılıyor.
  // Burada tekrar tanımlamak çift redirect zincirine yol açar ve
  // Google Search Console'da "Yönlendirmeli sayfa" hatasını tetikler.
}

module.exports = nextConfig
