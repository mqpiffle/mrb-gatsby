import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '@mdi/react'
import { mdiCopyright } from '@mdi/js'

import '../../styles/footer.css'

const Footer = props => {
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
                    {currentYear} Many Rivers Band.
                </p>
                <p>All rights reserved.</p>
            </div>
            <nav>
                <Link to='/news'>News</Link>
                <Link to='/about'>About</Link>
            </nav>
        </footer>
    )
}

export default Footer
