/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_ENDPOINT: "http://localhost:4000/graphql",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
