import axios from 'axios'
import React, { useEffect, useState } from 'react'

 export default function FetchNews() {
     const [data,setData] = useState(null)
     const [isLoaded,setLoadedNews] = useState(false)
     useEffect(()=>{
        axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-05-27&sortBy=popularity&apiKey=495ecbd0c1954346a34c30c66aa25539lorem23').then((response)=>{
            setLoadedNews(true)
            setData(response);
            console.log('The response is set now to',response);
        
        }).catch((err)=>{
            console.log(err);
        })
        
          
        
     },[isLoaded])



     return {data,isLoaded} }