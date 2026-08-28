/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve(__dirname);

    // Disable webpack cache to avoid build issues
    if (config.cache) {
      config.cache = false;
    }

    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;
