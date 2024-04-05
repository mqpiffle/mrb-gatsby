import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NewsCard from "./NewsCard"

import "../../styles/news-feed.css"

const NewsFeed = () => {
	const data = useStaticQuery(graphql`
		query {
			allStrapiArticle {
				nodes {
					mainImage {
						localFile {
							childImageSharp {
								gatsbyImageData(aspectRatio: 1.666667)
							}
						}
					}
					title
					body {
						data {
							childMarkdownRemark {
								html
							}
						}
					}
					slug
					id
					publishedAt(formatString: "MM-DD-YYYY")
				}
			}
		}
	`)

	const list = data.allStrapiArticle.nodes.map((article) => (
		<li key={article.id}>
			<NewsCard
				newsImage={article.mainImage.localFile}
				title={article.title}
				body={article.body.data.childMarkdownRemark.html}
				slug={article.slug}
				date={article.publishedAt}
			/>
		</li>
	))

	return (
		<>
			<h2 className='page-title'>Many Rivers Band News</h2>
			<ul className='news-list'>{list}</ul>
		</>
	)
}

export default NewsFeed
