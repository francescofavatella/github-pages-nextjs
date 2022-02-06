/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
module.exports = {
  images: {
    domains: [""],
  },
  assetPrefix: !debug ? "https://francescofavatella.github.io/blog/" : "",
};
