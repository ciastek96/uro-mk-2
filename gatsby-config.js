require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "cpw7vwgj",
        dataset: "production",
        token: `sk3p8cm3Fln8sFzxT3tvoEg3BCJKV6XeRAZQ2DkDWMMggO5tDTkppU7k0UwAjBDPIpuGJilvedl0mKmqF8HkqSbICPlbNE4WcQUTd8x9gyLblb8MKLO3SogrN1P4LQz81l5PCACccF1PMlN5buxdO1puAYJcJ4ILPBLNJmFvDlS7nEMJDutC`,
        graphqlTag: "default",
      },
    },
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
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
