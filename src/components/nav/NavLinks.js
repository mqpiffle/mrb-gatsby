import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const NavLinks = () => {
    const data = useStaticQuery(graphql`
        query {
            strapiHeader {
                link {
                    displayName
                    linkTo
                    id
                }
            }
        }
    `)

    const menuLinks = data.strapiHeader.link.map(link => (
        <Link
            to={link.linkTo}
            key={link.id}
        >
            {link.displayName}
        </Link>
    ))
    return (
        <div className='menu__links'>
            <nav>{menuLinks}</nav>
        </div>
    )
}

export default NavLinks
