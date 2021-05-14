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
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        // resolve: "gatsby-source-contentful",
        // options: contentfulConfig,
        spaceId: 'd16x4xqejal2',
        accessToken: '3UnShcIxz9RJ7Ie_2ZNqnal5P-wXQa4SAA9ZgwcCs_M',
        
      },
    },
  ],
};