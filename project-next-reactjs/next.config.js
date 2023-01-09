/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
