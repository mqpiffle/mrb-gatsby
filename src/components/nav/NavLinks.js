import * as React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
    return (
        <div className='menu__links'>
            <nav>
                <Link to='/news'>News</Link>
                <Link to='/media'>Media</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default NavLinks
