require(`dotenv`).config()

module.exports = {
  pathPrefix: "/homepage",
  siteMetadata: {
    title: "Ruixiang",
    description: "Ruixiang Du's personal site",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    "@reflexjs/gatsby-theme-doc",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
}
