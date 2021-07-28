require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Álvaro — Digital Product Designer based in Viña del Mar.`,
    author: {
      name: `Álvaro Göede`,
      summary: `who lives and works in Viña del mar, Chile building useful things`,
    },
    description: `Diseñador de productos digitales viviendo en Viña del Mar, Chile. Con experiencia en el desarrollo de Sistemas de Diseño. Especializándome en desarrollo front-end.`,
    siteUrl: `https://goede.cl`,
    social: {
      twitter: `alvaaz`,
      github: `https://github.com/alvaaz`,
      youtube: `https://www.youtube.com/channel/UCvMg7whAhSHpoL04E96fe5Q`,
      email: `alvaro@goede.cl`
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-62251910-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alvaaz`,
        short_name: `alvaaz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`
  ],
}
