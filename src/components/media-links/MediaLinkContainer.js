import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MediaLinkCapsule from "./MediaLinkCapsule"

import "../../styles/media-link-container.css"

const MediaLinkContainer = () => {
	const data = useStaticQuery(graphql`
		query {
			strapiHomepage {
				audioLink {
					displayName
					linkTo
				}
			}
		}
	`)

	const mediaLinks = data.strapiHomepage.audioLink.map((link) => (
		<MediaLinkCapsule
			displayName={link.displayName}
			linkTo={link.linkTo}
		/>
	))

	return (
		<section>
			<h2>Stream our music</h2>
			<div className='link-capsule-container'>{mediaLinks}</div>
		</section>
	)
}

export default MediaLinkContainer
