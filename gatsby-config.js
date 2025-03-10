require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Many Rivers Band",
		siteUrl: "https://www.manyriversband.com",
	},
	plugins: [
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.STRAPI_API_URL,
				accessToken: process.env.STRAPI_TOKEN,
				collectionTypes: ["article", "image-gallery"],
				singleTypes: ["header", "footer", "homepage", "aboutpage"],
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
		// 'gatsby-plugin-google-gtag',
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
}
