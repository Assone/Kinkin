const withTM = require("next-transpile-modules")(["ui", "@kinkin/web-service"]);

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["dev-to-uploads.s3.amazonaws.com", "img.yzcdn.cn"],
  },
};

module.exports = withTM(config);
