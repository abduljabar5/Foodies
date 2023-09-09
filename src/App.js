import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Navbar from './components/navbar';

function App() {


  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/yelp')
    console.log(results);
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="">
      <Navbar/>
     <Home />
    </div>
  );
}

export default App;
