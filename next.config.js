/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_ENDPOINT: "http://localhost:4000/graphql",
    ACCESS_TOKEN_MAX_AGE: 30000,
    REFLESH_TOKEN_MAX_AGE: 40000,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
