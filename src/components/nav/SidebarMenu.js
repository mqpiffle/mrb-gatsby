import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

const SidebarMenu = ({ sidebar, open }) => {
    const sidebarMenu = sidebar ? 'sidebar__open' : 'sidebar__closed'

    const handleClick = e => {
        e.preventDefault()
        open(false)
    }

    return (
        <aside className={`sidebar ${sidebarMenu}`}>
            <Icon
                path={mdiClose}
                title='Close Sidebar Menu'
                size={1.5}
                className='menu__icon'
                onClick={handleClick}
            />
            <nav>
                <Link to='/news'>News</Link>
                <Link to='/media'>Media</Link>
                <Link to='/about'>About</Link>
            </nav>
        </aside>
    )
}

export default SidebarMenu
