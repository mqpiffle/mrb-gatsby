import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'

import '../../styles/nav-menu.css'

const NavMenu = props => {
    return (
        <div className='menu'>
            <Icon
                path={mdiMenu}
                title='Dropdown Menu'
                size={1.5}
                className='menu__icon'
            />
            <div className='menu__links'>
                <nav>
                    <Link to='/news'>News</Link>
                    <Link to='/media'>Media</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavMenu
