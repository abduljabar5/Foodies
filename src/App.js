import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Search from './pages/Search'
function App() {

  return (
    <Router>
            <Navbar/>
    <Routes>
      <Route path="/" exact element= {<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
         <Footer />
        </Router>
  );
}

export default App;
