const withTM = require("next-transpile-modules")(["ui"]);

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withTM(config);
