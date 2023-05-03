/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  images: {
    domains: ['i.ytimg.com'],
  },
}

module.exports = nextConfig
