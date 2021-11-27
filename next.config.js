const withGraphQL = require("next-plugin-graphql");

module.exports = withGraphQL({
  webpack(config) {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      include: ["/src/"],
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },

  reactStrictMode: true,
  images: {
    domains: ["localhost", "flagcdn.com", "upload.wikimedia.org"],
    minimumCacheTTL: 60 * 60,
  },
  poweredByHeader: false,
});
