import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import '../../styles/images.css'

const Images = () => {
    const data = useStaticQuery(graphql`
		query {
			allStrapiImageGallery {
                nodes {
                    image {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
		}
	`)

        const images = data.allStrapiImageGallery.nodes.map((img, index) => (
            <li>
                <GatsbyImage
                    className='image'
                    image={getImage(img.image.localFile)}
                    alt={img.image.alternativeText}
                />
            </li>
        ))
    return (
        <div>
            <div className="images-title">Images</div>
            <ul className="images-grid">{images}</ul>
        </div>
    )
}

export default Images