import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
function App() {


  const fetchData = async () => {
    const results = await axios.get('/Foodies/.netlify/functions/yelp')
    console.log(results);
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
