/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '103.75.196.169',
        port: '8090',
        pathname: '/images/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
