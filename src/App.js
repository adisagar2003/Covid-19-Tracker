import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Nav from './Components/Nav/Nav';
import * as React from 'react';
import News from './Components/News/News';
import BarChart from './Graphs/BarChart';
import GraphLayout from './Graphs/GraphLayout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    
    <div className="App">
    
      <Header />
   
     
     <Nav></Nav>
      <News></News>
     
      <GraphLayout>
        
       
        
      </GraphLayout>
      
     

    </div>
  );
}

export default App;
