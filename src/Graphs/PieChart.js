import { BarElement } from 'chart.js'
import Bar from 'plotly.js/lib/bar'
import React ,{useEffect, useState}from 'react'
import styles from './PieChart.module.css'
import covidJsonData from '../Components/Hooks/Covid.json'
function PieChart({children,w,h }) {

  const positive = covidJsonData.positiveIncrease;
  const negative = covidJsonData.negativeIncrease;
  const deathIncrease  =covidJsonData.deathIncrease;
  const hospitalizedIncrease = covidJsonData.hospitalizedIncrease;  
  const covidData =[positive,negative,deathIncrease,hospitalizedIncrease]
  const maximumValue = Math.max(...covidData);
  const [position,setPosition] = useState(0);
  const width = 400
  const height = 250
  
  const barChart = ({x})=>{
      const barPosition = x;
      
   
    return (
      <rect x={`${barPosition}`} y='0' width='50' height='100' />
    )
  }
  let x = 4;
  const bar = barChart({x});
  console.log(bar,'This is a bar')

  
  return (
   <div className={styles.covidData}>
 
       <div>
     Positive cases : {positive}</div>
     
     <div>
     Negative cases : {negative}</div>
     <br></br>
     <div>
     Death cases : {deathIncrease}</div>

   </div> 
  )
  }



export default PieChart
