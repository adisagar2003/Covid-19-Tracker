import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import GraphLayout from '../../Graphs/GraphLayout'
import PieChart from '../../Graphs/PieChart'
import Navbar from '../Navbar/Navbar'
import About from '../../Graphs/About'
import News from '../News/News'
import './Frame.css'
import Box from '../Box'
import ThreeComponent from '../ThreeComponent'
import ChartVisuals from '../ChartVisuals'
function Frame() {
  return (
    <div className='mainFrame'>
        <BrowserRouter> 
      <Navbar />
 
      <div className='newsFrame'>
      <News /></div>
      <div className='dataFrame'>
      <div className='mainDataLayout'>
          Data:
          <Routes>
           
              <Route exact path='/' element={<About />} />
              <Route exact path='/data' element={<PieChart />} />           
              <Route path='/3d' element={<ChartVisuals />} />
          </Routes>
          </div>
       
      </div>
      </BrowserRouter>
    </div>
  )
}

export default Frame
