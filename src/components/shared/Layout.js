import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `)

    return (
        <body>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
        </body>
    )
}

export default Layout
