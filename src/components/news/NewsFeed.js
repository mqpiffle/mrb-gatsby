import React from 'react'

import NewsCard from './NewsCard'

import '../../styles/news-feed.css'

const NewsFeed = ({ newsData }) => {
    const list = newsData.map(article => (
        <li key={article.id}>
            <NewsCard
                newsImage={article.mainImage.localFile}
                title={article.title}
                body={article.body.data.childMarkdownRemark.html}
                slug={article.slug}
                date={article.publishedAt}
            />
        </li>
    ))
    return (
        <>
            <h1 className='news-title'>Many Rivers Band News</h1>
            <ul className='news-list'>{list}</ul>
        </>
    )
}

export default NewsFeed
