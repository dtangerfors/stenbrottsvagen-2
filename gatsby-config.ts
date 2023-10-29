require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stenbrottsvägen Bokningsportal`,
    siteUrl: `https://stenbrottsvagen.se`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stenbrottsvägen`,
        short_name: `SBV 3`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#223c3b`,
        display: `standalone`,
        icon: `src/images/logo.svg`,
        legacy: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/app/*`],
      },
    },
  ],
};

export default config;
