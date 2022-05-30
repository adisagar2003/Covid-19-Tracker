import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

import * as React from 'react';
import News from './Components/News/News';
import BarChart from './Graphs/BarChart';
import GraphLayout from './Graphs/GraphLayout';
import PieChart from './Graphs/PieChart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import { BarElement } from 'chart.js';
function App() {
  
  return (
    
    <div className="App">
    
      <Header />
   
     
     
      <News></News>
     
      <GraphLayout>
     
       
        
      </GraphLayout>
      <PieChart />
      <Footer />
   

    </div>
  );
}

export default App;
