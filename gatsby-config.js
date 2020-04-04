module.exports = {
  siteMetadata: {
    title: `Bryzol Catering`,
    description: `Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego. Wszelkie oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci. Jeden lubuje się w gotowaniu i tworzeniu nowoczesnych w formie dań ze znanych nam klasyków. Drugi za to wymyśla grzechu warte desery i torty.`,
    author: `Eryk Słociński`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-offline`,
  ],
};
