module.exports = {
  siteMetadata: {
    title: `CreditFix Financial Services Limited`,
    description: `Creditfix is a licensed lending platform that does data driven decision making and assessment for individual and small businesses with speed, with the ability to entertain underserved and unserved segments get a loan conveniently and quickly.`,
    keywords: `creditfix, fintech, loans, finance, financing`,
    url: `https://www.creditfix.pk/`,
    author: `@creditfix`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-YT1P3E02F8", // GOOGLE ANALYTICS TRACKING ID
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CreditFix Pvt Ltd`,
        short_name: `CreditFix`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
