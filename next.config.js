/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    qualities: [62, 75, 78, 82, 95],
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
