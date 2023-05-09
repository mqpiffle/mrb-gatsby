import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const NewsPage = ({ data }) => {
    const article = data.allStrapiArticle
    const articleLinks = article?.nodes.map(art => (
        <Link to={art.slug}>
            <h3>{art.title}</h3>
        </Link>
    ))

    return (
        <Layout>
            <p>This is our news page.</p>
            {articleLinks}
        </Layout>
    )
}

export default NewsPage

export const Head = () => <Seo title={'News'} />

export const PageQuery = graphql`
    query {
        allStrapiArticle {
            nodes {
                title
                slug
            }
        }
    }
`
