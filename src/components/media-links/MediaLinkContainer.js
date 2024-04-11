import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MediaLinkCapsule from "./MediaLinkCapsule"

import "../../styles/media-link-container.css"

const MediaLinkContainer = () => {
	const data = useStaticQuery(graphql`
		query {
			strapiHomepage {
				audioLink {
					icon
					displayName
					linkTo
				}
			}
		}
	`)

	const mediaLinks = data.strapiHomepage.audioLink.map((link) => (
		<MediaLinkCapsule
			icon={link.icon}
			displayName={link.displayName}
			linkTo={link.linkTo}
		/>
		// <div className='link-capsule'>
		// 	<Icon
		// 		path={mdiApple}
		// 		title='iTunes'
		// 		size={1}
		// 		color='var(--clr-gray-80)'
		// 	/>
		// 	<a href={link.linkTo} target='_blank' rel='noreferrer'>
		// 		{link.displayName}
		// 	</a>
		// </div>
	))

	return (
		<section>
			<h2>Stream our music</h2>
			<div className='link-capsule-container'>{mediaLinks}</div>
		</section>
	)
}

export default MediaLinkContainer
