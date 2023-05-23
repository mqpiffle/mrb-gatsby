import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

import '../styles/article.css'

const Article = ({ data }) => {
    const article = data.strapiArticle

    return (
        <Layout>
            <article className='news-article'>
                <GatsbyImage
                    image={getImage(article?.mainImage?.localFile)}
                    alt='Now this is a tiger.'
                />
                <h2 className='news-article__title'>{article?.title}</h2>
                <div
                    className='text-body'
                    dangerouslySetInnerHTML={{
                        __html: article?.body.data.childMarkdownRemark.html,
                    }}
                />
            </article>
        </Layout>
    )
}

export const pageQuery = graphql`
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
