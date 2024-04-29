/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@acme/ui', 'lodash-es'],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  serverRuntimeConfig: {
    BACKEND_HOST: process.env.BACKEND_HOST,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_BACKEND_HOST: process.env.NEXT_PUBLIC_BACKEND_HOST,
  },
};

module.exports = nextConfig;
