import * as React from 'react'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const NewsPage = props => {
    return (
        <Layout>
            <p>This is our news page.</p>
        </Layout>
    )
}

export default NewsPage

export const Head = () => <Seo title={'News'} />
