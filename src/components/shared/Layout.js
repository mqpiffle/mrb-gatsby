import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

    const metadata = data.site.siteMetadata

    return (
        <body>
            <Header siteTitle={metadata.title} />
            <main>{children}</main>
            <Footer siteTitle={metadata.title} />
        </body>
    )
}

export default Layout
