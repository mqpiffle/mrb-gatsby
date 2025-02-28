import * as React from 'react'

import Images from '../components/media/Images'
import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const MediaPage = props => {
    return (
        <Layout>
            <Images />
        </Layout>
    )
}

export default MediaPage

export const Head = () => <Seo title={'Media'} />
