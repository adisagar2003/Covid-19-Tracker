import React from 'react'
import styles from '../News/News.module.css'
//import FetchNews from '../Hooks/FetchNews'
function News() {
   // FetchNews()
  return (
    <div className={styles.layout}>
        <dl>
        <dt >NEWS</dt>
        <dd className={styles.description}>  AYLIEN News API is a powerful tool for sourcing, searching and syndicating analyzed and enriched news content. Using this API, users can search and source news and content from all over the web in real-time. Using the power of Machine Learning and NLP to understand content at scale while extracting the data that is needed is a key component of the AYLIEN News API. The API can be used to monitor worldwide news outlets in real-time to provide users with a COVID-19 related news data feed.</dd>
        <dd className={styles.description}>  AYLIEN News API is a powerful tool for sourcing, searching and syndicating analyzed and enriched news content. Using this API, users can search and source news and content from all over the web in real-time. Using the power of Machine Learning and NLP to understand content at scale while extracting the data that is needed is a key component of the AYLIEN News API. The API can be used to monitor worldwide news outlets in real-time to provide users with a COVID-19 related news data feed.</dd>

        </dl>
    </div>
  )
}

export default News
