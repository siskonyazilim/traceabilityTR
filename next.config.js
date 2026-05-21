/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    qualities: [75, 78, 82],
  },
}

module.exports = nextConfig
