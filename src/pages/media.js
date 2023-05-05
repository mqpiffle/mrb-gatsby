import * as React from 'react'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const MediaPage = props => {
    return (
        <Layout>
            <p>This is our media page.</p>
        </Layout>
    )
}

export default MediaPage

export const Head = () => <Seo title={'Media'} />
