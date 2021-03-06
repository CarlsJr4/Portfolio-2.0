module.exports = {
  siteMetadata: {
    title: `Carl Dungca - Portfolio`,
    description: `Carl Dungca's web developer projects.`,
    author: `Carl Dungca`,
  },
  plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
		},
		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: 'nof1t6y8',
				dataset: 'projects'
			}
		},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-132321434-4"
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
