require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: "Brackets",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
