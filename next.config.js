/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
  },
});
