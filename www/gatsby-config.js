/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Medusa",
    description: "Open-source headless commerce engine",
    author: "Medusa core team",
    menuItems: [{ path: "/docs", title: "Docs" }],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -300,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../docs/api/store`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../docs/api`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/pages`,
        name: "pages",
      },
    },
  ],
}
