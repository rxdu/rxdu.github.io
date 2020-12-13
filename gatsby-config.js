require(`dotenv`).config()

module.exports = {
  pathPrefix: "/homepage",
  siteMetadata: {
    title: "Ruixiang's Homepage",
    description: "Personal website of Ruixiang Du.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [`gatsby-plugin-reflexjs`],
}
