import * as React from 'react'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

const AboutPage = props => {
    return (
        <Layout>
            <p>This is our about page.</p>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <Seo title={'About'} />
