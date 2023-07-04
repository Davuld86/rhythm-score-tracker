import React, { Fragment, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import DDR from './DDR';
import CloneHero from './CloneHero';
import MusicDiver from './MusicDiver';
import HighScoreForum from './HighScoreForum';

import Home from './Home';



function App() {
  return (
  <Fragment>
  <h1>Rhythm Game Record Tracker</h1>
  <NavBar/>
  <Routes>
  <Route path='/' Component ={Home}/>
      
   <Route path='/add-score' Component={HighScoreForum}/>
   
    <Route path='/ddr' Component={DDR}/>
     
    
    <Route path='/clone-hero' Component={CloneHero}/>
     
    
    <Route path='/music-diver'Component={MusicDiver}/>
    </Routes>
  </Fragment>
  )
}

export default App;
