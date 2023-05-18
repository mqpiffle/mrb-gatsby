import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const AboutPage = ({ data }) => {
    return (
        <Layout>
            <GatsbyImage
                className='hero-image'
                image={getImage(data.strapiAboutpage.mainImage.localFile)}
                alt='Many Rivers Band logo'
            />
            <div
                className='text-body'
                dangerouslySetInnerHTML={{
                    __html: data.strapiAboutpage.text.data.childMarkdownRemark
                        .html,
                }}
            />
        </Layout>
    )
}

export default AboutPage

export const Head = () => <Seo title={'About'} />

export const PageQuery = graphql`
    query {
        strapiAboutpage {
            title
            mainImage {
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
