import * as React from "react"

import Layout from "../components/shared/Layout"
import Seo from "../components/shared/Seo"
import NewsFeed from "../components/news/NewsFeed"

const NewsPage = () => {
	// const article = data.allStrapiArticle
	// const articleLinks = article?.nodes.map(art => (
	//     <Link to={art.slug}>
	//         <h3>{art.title}</h3>
	//     </Link>
	// ))

	return (
		<Layout>
			<NewsFeed />
		</Layout>
	)
}

export default NewsPage

export const Head = () => <Seo title={"News"} />

// export const PageQuery = graphql`
// 	query {
// 		allStrapiArticle {
// 			nodes {
// 				mainImage {
// 					localFile {
// 						childImageSharp {
// 							gatsbyImageData(width: 400, aspectRatio: 1.666667)
// 						}
// 					}
// 				}
// 				title
// 				body {
// 					data {
// 						childMarkdownRemark {
// 							html
// 						}
// 					}
// 				}
// 				slug
// 				id
// 				publishedAt(formatString: "MM-DD-YYYY")
// 			}
// 		}
// 	}
// `
