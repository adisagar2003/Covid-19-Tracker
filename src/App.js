import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Nav from './Components/Nav/Nav';
import Stat1 from './Graphs/stat1';
function App() {
  return (
    <div className="App">
      <Header />
     <Nav></Nav>
     <Stat1></Stat1>
    </div>
  );
}

export default App;
