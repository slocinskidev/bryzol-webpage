require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bryzol Catering`,
    description: `Bryzol Catering to firma oferująca usługi cateringu zarówno słonego, jak i słodkiego.
    Wszelkie oferty tworzone są pod potrzeby Klienta. Firmę stworzyli dwaj pasjonaci Andrzej
    Słociński i Adam Gembalczyk. Jeden lubuje się w gotowaniu i tworzeniu nowoczesnych w formie
    dań ze znanych nam klasyków, drugi za to wymyśla grzechu warte desery i torty.`,
    author: `Bryzol Catering`,
    keywords: `bryzol, mania gotowania`,
    image: '/images/logo.png',
    url: `https://bryzol-webpage.netlify.app`,
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
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATOCMS_KEY,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryzol Catering`,
        short_name: `Bryzol`,
        start_url: `/`,
        lang: `pl`,
        background_color: `#52542C`,
        theme_color: `#52542C`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: 'src/images/maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
