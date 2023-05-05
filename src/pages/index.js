import * as React from 'react'

import Layout from '../components/shared/Layout'
import Seo from '../components/shared/Seo'

import '../styles/index.css'

const IndexPage = props => {
    return (
        <Layout pageTitle={'Many Rivers Band Official Website | Home'}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur quasi, sapiente dicta vitae ducimus distinctio
                perferendis eveniet repellat nesciunt recusandae! Nulla sapiente
                dignissimos beatae ea consequuntur labore, odit iusto eos.
            </p>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <Seo title={'Home'} />
