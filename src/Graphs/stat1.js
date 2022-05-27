import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './Stat.module.css'
import { Bar } from 'react-chartjs-2';
import FetchAPI from '../Components/Hooks/FetchAPI';
import Loader from 'react-loaders';
import axios from 'axios';

import RingLoader from "react-spinners/RingLoader"
ChartJS.register(ArcElement, Tooltip, Legend);
function Stat1() {


  const {response,err,loading} = FetchAPI()
  



  let Positive = response.data[0].positive;
  let Negative = response.data[0].negative;

  let Hospitalized = response.data[0].hospitalized;

  let onVentilatorCumulative = response.data[0].onVentilatorCumulative;
  let onVentilatorCurrently = response.data[0].onVentilatorCurrently;
  


  
  console.log(loading)
  
  const [chartData, setChartData] = useState({})
  
  // const myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //           label: '# of Votes',
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //               'rgba(255, 99, 132, 0.2)',
  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)'
  //           ],
  //           borderColor: [
  //               'rgba(255, 99, 132, 1)',
  //               'rgba(54, 162, 235, 1)',
  //               'rgba(255, 206, 86, 1)',
  //               'rgba(75, 192, 192, 1)',
  //               'rgba(153, 102, 255, 1)',
  //               'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //       }]
  //   },
  //   options: {
  //       scales: {
  //           y: {
  //               beginAtZero: true
  //           }
  //       }
  //   }

  // });
  const data = {
      labels: ['Positive Cases', 'Negative Cases', 'Hospitalized Currently', 'On Ventilator Culimative', 'On Ventilator Currently', 'Orange'],
    datasets: [
      {
        label: 'Current situation',
        data: [Positive, Negative, Hospitalized, onVentilatorCumulative, onVentilatorCurrently, 3],
        backgroundColor: [
          '#2c668f',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  if (loading){
    return <RingLoader color='purple' loading={loading}  size={150} />
    
  }
  else{
    return (

    
      <div className={styles.layout}> 
      <div className={styles.graph}>
  <Doughnut data={data}  
    options={{ maintainAspectRatio: false }} />
      </div></div>
    )
  }
  
}

export default Stat1
