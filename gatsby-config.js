require(`dotenv`).config()

module.exports = {
  pathPrefix: "/homepage",
  siteMetadata: {
    title: "Reflexjs",
    description: "Starter for Reflexjs.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [`gatsby-plugin-reflexjs`],
}
