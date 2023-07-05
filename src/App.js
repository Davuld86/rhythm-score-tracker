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
  const [dScores, setDScores] = useState([])
  const [cScores, setCScores]= useState([])
  const [mScores, setMScores]= useState([])

  function handleScoreSubmit(sObj){
    console.log(sObj)
  }
  
  function addNewScore(game,sObj){

  }

  return (
  <Fragment>
  <h1>Rhythm Game Record Tracker</h1>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
      
   <Route path='/add-score' element={<HighScoreForum handleScoreSubmit={handleScoreSubmit}/>}/>
   
    <Route path='/ddr' element={<DDR scores={dScores}/>}/>
     
    <Route path='/clone-hero' element={<CloneHero scores={cScores}/>}/>
     
    <Route path='/music-diver' element={<MusicDiver scores={mScores}/>}/>
    </Routes>
  </Fragment>
  )
}

export default App;
