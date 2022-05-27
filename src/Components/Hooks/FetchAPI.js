import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function  FetchAPI() {
    const [response,setData] = useState(null)
    const [err,setErr] = useState(null)
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get('https://api.covidtracking.com/v1/us/current.json').then((response)=>{
            setLoading(false)
            console.log(response);
            setData(response)
            return response
        
        })
        .catch((err)=>{
            setLoading(false);
            setData(err)
            
            console.log(err);
            return err
        })

    },[loading])
   

    return {response,err,loading}
}

