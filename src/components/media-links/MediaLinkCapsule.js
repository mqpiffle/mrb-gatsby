import * as React from "react"

import Icon from "@mdi/react"
import { mdiApple, mdiStar } from "@mdi/js"

const MediaLinkCapsule = ({ displayName, linkTo }) => {

	return (
		<div className='link-capsule'>
			<Icon
				path={mdiApple}
				title='iTunes'
				size={1}
				color='var(--clr-gray-80)'
			/>
			<a href={linkTo} target='_blank' rel='noreferrer'>
				{displayName}
			</a>
		</div>
	)
}
export default MediaLinkCapsule
