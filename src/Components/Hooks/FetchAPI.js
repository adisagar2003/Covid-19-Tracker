import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchAPI(){
    const [response,setResponse] = useState(null);
    const [error,setError] = useState(null);
    const [isLoaded,setLoad] = useState(false);
    useEffect(()=>{
        axios.get('https://api.covidtracking.com/v1/us/current.json').then((response)=>{
            setLoad(true)
            setResponse(response)
        }).catch((err)=>{
            setLoad(true)
            setResponse(err);
        })
    },[])
    console.log(isLoaded)
    return {response,error,isLoaded}
}