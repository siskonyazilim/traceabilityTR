/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  // www → non-www yönlendirmesi Cloudflare tarafında yapılıyor.
  // Burada tekrar tanımlamak çift redirect zincirine yol açar ve
  // Google Search Console'da "Yönlendirmeli sayfa" hatasını tetikler.
}

module.exports = nextConfig
