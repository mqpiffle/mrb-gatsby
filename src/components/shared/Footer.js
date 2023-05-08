import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Icon from '@mdi/react'
import { mdiCopyright } from '@mdi/js'

import '../../styles/footer.css'

const Footer = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            strapiFooter {
                copyrightByline
            }
        }
    `)
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className='copyright'>
                <p className='copyright__statement'>
                    <Icon
                        path={mdiCopyright}
                        title='Copyright'
                        size={1}
                    />
                    {currentYear} {siteTitle}
                </p>
                <p>{data.strapiFooter.copyrightByline}</p>
            </div>
        </footer>
    )
}

export default Footer
