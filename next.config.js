/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'prnt.sc'
      }
      ,
      {
        protocol: 'https',
        hostname: 'ibb.co'
      }
    ]
  },
};

module.exports = nextConfig;
