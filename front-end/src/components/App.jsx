// import { useState } from 'react'
import React from 'react';
import { Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import Create from '../create';
import Read from './Read';
import Update from './update';
// import Carousel from "./Carousel";


import './App.css';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />  
        </Routes>
    </Router>
    
  );

}

export default App;
