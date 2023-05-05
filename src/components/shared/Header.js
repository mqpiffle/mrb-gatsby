import * as React from 'react'
import { Link } from 'gatsby'

import NavMenu from '../nav/NavMenu'

import '../../styles/header.css'

const Header = ({ siteTitle }) => {
    return (
        <header>
            <Link
                to='/'
                className='brand'
            >
                <p className='brand__text'>{siteTitle}</p>
            </Link>
            <NavMenu />
        </header>
    )
}

export default Header
