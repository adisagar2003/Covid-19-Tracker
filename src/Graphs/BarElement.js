import React from 'react'

const BarElement = ({x})=>{
    const barPosition = x;
 
  return (
    <rect x={`${barPosition}`} y='0' width='50' height='100' />
  )
}

export default BarElement
