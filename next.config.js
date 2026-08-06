/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'traceabilitydb.domainmanager.com.tr',
      },
    ],
    qualities: [62, 75, 78, 82, 95],
  },
}

module.exports = nextConfig
