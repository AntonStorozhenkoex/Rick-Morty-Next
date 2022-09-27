/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com"],
    loader:'akamai',
    path:''
  },
  compiler: {
    reactRemoveProperties: true,
  },
  assetPrefix:'./',
};

export default nextConfig;
