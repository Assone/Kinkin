const withTM = require("next-transpile-modules")(["ui"]);

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["dev-to-uploads.s3.amazonaws.com"],
  },
};

module.exports = withTM(config);
