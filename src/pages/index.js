import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

import '../styles/index.css'

const IndexPage = ({ data }) => {
    return (
        <Layout pageTitle={'Many Rivers Band Official Website | Home'}>
            <GatsbyImage
                className='hero-image'
                image={getImage(data.strapiHomepage.heroImage.localFile)}
                alt='Many Rivers Band logo'
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: data.strapiHomepage.text.data.childMarkdownRemark
                        .html,
                }}
            />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title={'Home'} />

export const PageQuery = graphql`
    query {
        strapiHomepage {
            title
            heroImage {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            text {
                data {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
`
