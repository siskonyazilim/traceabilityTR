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
        hostname: 'izlenebilirlik.com.tr',
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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.izlenebilirlik.com.tr' }],
        destination: 'https://izlenebilirlik.com.tr/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
