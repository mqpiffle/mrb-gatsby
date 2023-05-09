import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const Article = ({ data }) => {
    const article = data.strapiArticle

    return (
        <Layout>
            <article>
                <GatsbyImage
                    image={getImage(article?.mainImage?.localFile)}
                    alt='Now this is a tiger.'
                />
                <h2>{article?.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: article?.body.data.childMarkdownRemark.html,
                    }}
                />
            </article>
        </Layout>
    )
}

export const PageQuery = graphql`
    query ($slug: String) {
        strapiArticle(slug: { eq: $slug }) {
            mainImage {
                localFile {
                    childImageSharp {
                        gatsbyImageData
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
        }
    }
`

export default Article
