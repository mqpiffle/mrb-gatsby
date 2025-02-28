import React from 'react'
import { Link } from 'gatsby'

import Brand from '../../assets/mrb_brand.svg'
import NavMenu from '../nav/NavMenu'
import MediaLinkContainer from '../media-links/MediaLinkContainer'

import '../../styles/header.css'

const Header = ({ siteTitle }) => {
    return (
        <header>
            <div className='header-main'>
                <Link to='/'>
                    <h1 className='temp'>Many Rivers Band</h1>
                    {/* <Brand className='brand-logo' /> */}
                </Link>
                <NavMenu />
            </div>
            <MediaLinkContainer />
        </header>
        
    )
}

export default Header
