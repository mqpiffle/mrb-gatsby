import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
    return (
        <body>
            <Header />
            <main>{children}</main>
            <Footer />
        </body>
    )
}

export default Layout
