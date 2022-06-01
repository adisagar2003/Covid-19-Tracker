import React from 'react'
import covidJsonData from './Hooks/Covid.json'



const positive = covidJsonData.positiveIncrease;
const negative = covidJsonData.negativeIncrease;
const deathIncrease  =covidJsonData.deathIncrease;
const hospitalizedIncrease = covidJsonData.hospitalizedIncrease;  
function DataReal() {
  return (
    <div>
     Positive Cases: {positive}<br></br>
     Negative Cases: {negative}<br></br>
     Death Increase: {deathIncrease}<br></br>

    </div>
  )
}

export default DataReal
