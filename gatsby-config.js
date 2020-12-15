require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Ruixiang Du",
    description: "Personal website of Ruixiang Du.",
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
