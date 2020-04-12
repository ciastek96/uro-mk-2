module.exports = {
  siteMetadata: {
    title: "URO-MK",
    titleTemplate: "%s · URO-MK",
    titleAlt: "URO-MK - usługi remontowo-ociepleniowe",
    description:
      "Renowacja, mycie oraz impregnacja kostki brukowej, usługi brukarskie, projektowanie ogrodów",
    url: "https://www.uro-mk.pl", // No trailing slash allowed!
    siteLanguage: "pl",
    image: "src/assets/logo.svg", // Path to your image you placed in the 'static' folder
    favicon: "src/assets/favicon.svg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
