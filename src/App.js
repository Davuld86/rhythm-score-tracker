import React, { Fragment, useEffect, useState } from 'react';
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

  function handleScoreSubmit(game,sObj){
    console.log(sObj)
    let link = ''
    switch(game){
      case 'Dance Dance Revolution':
         link = 'http://localhost:3000/DDRScores'
         sObj.id = dScores.length +1
         const dTemp = [...dScores, sObj]
         setDScores(dTemp)
         break;
      case 'Clone Hero':
         link=  'http://localhost:3000/CloneHeroScores'
         sObj.id = cScores.length +1
         const cTemp = [...cScores, sObj]
         setDScores(cTemp)
         break;
      case 'Music Diver':
         link = 'http://localhost:3000/MusicDiverScores'
         sObj.id = mScores.length +1
         const mTemp = [...mScores, sObj]
         setDScores(mTemp)
         break;
    }

    fetch(link,{
      method: 'POST',
      headers:{
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(sObj)
    })
    
  }
  
  useEffect(()=>{
    fetch('http://localhost:3000/DDRScores')
    .then((r)=>r.json())
    .then((d)=> setDScores(d))

    fetch('http://localhost:3000/CloneHeroScores')
    .then((r)=>r.json())
    .then((d)=> setCScores(d))

    fetch('http://localhost:3000/MusicDiverScores')
    .then((r)=>r.json())
    .then((d)=> setMScores(d))
  },[])

  return (
  <Fragment>
  <h1>Rhythm Game Record Recorder</h1>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home dScores={dScores} mScores={mScores} cScores={cScores}/>}/>
    <Route path='/add-score' element={<HighScoreForum handleScoreSubmit={handleScoreSubmit}/>}/>
    <Route path='/ddr' element={<DDR scores={dScores}/>}/>
    <Route path='/clone-hero' element={<CloneHero scores={cScores}/>}/>
    <Route path='/music-diver' element={<MusicDiver scores={mScores}/>}/>
    </Routes>
  </Fragment>
  )
}

export default App;
