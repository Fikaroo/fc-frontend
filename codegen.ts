import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: ["src/graphql/**/*.gql"],
  generates: {
    "src/graphql/generate/": {
      preset: "client",
    },
  },
};

export default config;
