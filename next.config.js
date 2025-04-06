/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/sanity_ecommerce/:path*',
        destination: 'http://localhost:3333/sanity_ecommerce/:path*'
      }
    ]
  }
}
