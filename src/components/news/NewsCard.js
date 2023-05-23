import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import '../../styles/news-card.css'

const NewsCard = ({ newsImage, title, body, slug, date }) => {
    return (
        <Link
            to={`/news/${slug}`}
            className='card'
        >
            <GatsbyImage
                image={getImage(newsImage)}
                className='card-image'
            />
            <div className='card-context'>
                <div className='card-context-heading'>
                    <h2 className='card-context__title'>{title}</h2>
                    <small className='card-context__date'>{date}</small>
                </div>
                <p
                    className='card-context__body'
                    dangerouslySetInnerHTML={{
                        __html: body,
                    }}
                ></p>
            </div>
        </Link>
    )
}

export default NewsCard
