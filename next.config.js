/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@acme/ui', 'lodash-es'],
}

module.exports = nextConfig
