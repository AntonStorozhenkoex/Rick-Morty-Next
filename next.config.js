/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  compiler: {
    reactRemoveProperties: true,
  },
};

module.exports = nextConfig;
