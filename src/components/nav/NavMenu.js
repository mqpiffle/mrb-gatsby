import React, { useState } from 'react'

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'

import NavLinks from './NavLinks'
import SidebarMenu from './SidebarMenu'

import '../../styles/nav-menu.css'

const NavMenu = props => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        setSidebarOpen(true)
    }

    console.log(sidebarOpen)
    return (
        <div className='menu'>
            <Icon
                path={mdiMenu}
                title='Sidebar Menu'
                size={1.5}
                className='menu__icon'
                onClick={handleClick}
            />
            <NavLinks />
            <SidebarMenu
                sidebar={sidebarOpen}
                open={setSidebarOpen}
            />
        </div>
    )
}

export default NavMenu
