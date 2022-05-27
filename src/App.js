import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Nav from './Components/Nav/Nav';
import Stat1 from './Graphs/stat1';
import News from './Components/News/News';
import BarGraph from './Graphs/BarGraph';
import GraphLayout from './Graphs/GraphLayout';
function App() {
  return (
    <div className="App">
      <Header />
     <Nav></Nav>
      <News></News>
      <BarGraph></BarGraph>
      <GraphLayout>
        

        
      </GraphLayout>

    </div>
  );
}

export default App;
