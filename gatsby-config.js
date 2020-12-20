require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Ruixiang",
    description: "Ruixiang Du's personal site",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    "@reflexjs/gatsby-theme-doc",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    "gatsby-remark-responsive-iframe",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/images`,
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-47255965-1",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Avoids sending pageview hits from custom paths
          exclude: ["/resource/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
        },
    },
  ],
}
