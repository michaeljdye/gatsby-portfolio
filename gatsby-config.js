module.exports = {
	siteMetadata: {
		title: 'Joey Dye',
		titleTemplate: '%s · Web Developer',
		description: 'Web Developer, writer, musician, husband and dad.',
		url: 'https://joeydye.com', // No trailing slash allowed!
		image: '/images/favicon.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@joey_m_dye'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utilities/typography.js`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/blog`
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Joey Dye`,
				short_name: `JoeyD`,
				start_url: `/`,
				background_color: `#202833`,
				theme_color: `#6efaf1`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify` // make sure to put last in the array
	]
}
