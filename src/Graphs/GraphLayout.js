import React from 'react'
import styles from './GraphLayout.module.css'
import { Chart } from "react-google-charts";
import BarChart from './BarChart';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import FetchAPI from '../Components/Hooks/FetchAPI'
import PieChart from './PieChart';
import About from './About';

function GraphLayout() {
 // const {response,error,isLoaded} = FetchAPI()
  //console.log(response.data[0].date)
  return (
    <div className={styles.layout}>
        
      <span className={styles.dataHeading}>Data</span>

      <div class={styles.dataGraph}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<About />}></Route>
        <Route exact path='/bargraph' element={<BarChart />}></Route>
        <Route exact path='/piechart' element={<PieChart />}></Route>
      </Routes>
      </BrowserRouter></div>

      
    </div>
  )
}

export default GraphLayout
