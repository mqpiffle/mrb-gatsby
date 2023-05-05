import * as React from 'react'
import { Link } from 'gatsby'

import '../../styles/header.css'

const Header = props => {
    return (
        <header>
            <Link to='/'>Many Rivers Band</Link>
            <nav>
                <Link to='/news'>News</Link>
                <Link to='/about'>About</Link>
            </nav>
        </header>
    )
}

export default Header
