const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'YayBlog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.DELIVERY_TOKEN,
        spaceId: process.env.SPACE_ID,
      },
    },
  ],
};
