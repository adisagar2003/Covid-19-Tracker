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
    
    <div className={styles.chartLayout}>
      
      


      <svg className={styles.chartSvj} viewBox={`0 0 ${width} ${height}`} 
      width= "100%"
      height= "40%"
      preserveAspectRatio='xMidYMax meet'
      >

{  covidData.map((data)=>{
   
  useEffect(()=>{
    setPosition(position+100);
  },[data])
    let percentValue = (data/maximumValue)*100;
    console.log(percentValue,'percentage')
    console.log(position,'Current Position')
    
    return (
      
      <rect x={`${position}`} y='0' width = '40' height={`${percentValue}`} fill='blue' />
      
    )
  })}


      </svg>







      <button onClick={()=>setPosition(position+10)}>Refresh</button>
    </div>
  )
}

export default PieChart
