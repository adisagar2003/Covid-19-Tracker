import React from 'react'
import styles from '../News/News.module.css'
import FetchNews from '../Hooks/FetchNews'
import newsJsonData from './news.json'
function News() {
  console.log(newsJsonData,'This is the static JSON Data')
  const {data, isLoaded} = FetchNews()

  window.localStorage.setItem('NewsData',JSON.stringify(data))
 var newsData= window.localStorage.getItem('NewsData');
 const newsDataParsed = JSON.parse(newsData)

 console.log()
  return (
    <div className={styles.layout}>
        <dl>
        <dt >NEWS</dt>
        {newsJsonData.articles.map((news)=>{
          return (<dd className={styles.description}>{news.title}</dd>)
        })}
        


        </dl>
    </div>
  )
}

export default News
