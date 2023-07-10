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

  function handleScoreSubmit(sObj){
    let link = ''
    switch(sObj.gameType){
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


  function handleScoreDelete(score){
    let link = ''
    switch(score.gameType){
      case 'Dance Dance Revolution':
         link ='http://localhost:3000/DDRScores'
         const dTemp = dScores.filter((s)=> s.id!=score.id)
         setDScores(dTemp)
         break;

      case 'Clone Hero':
         link= 'http://localhost:3000/CloneHeroScores'
         const cTemp = cScores.filter((s)=> s.id!=score.id)
         setDScores(cTemp)
         break;

      case 'Music Diver':
         link ='http://localhost:3000/MusicDiverScores'
         const mTemp = mScores.filter((s)=> s.id!=score.id)
         setDScores(mTemp)
         break;
    }
    fetch(link`/${score.id}`,{
      method: "DELETE",
      headers: {'Content-type':'application/json'}
    })
  }

  function setScores(scores){
    switch(scores[0].gameType){
      case 'Dance Dance Revolution':
         setDScores((dScores)=> dScores=scores) 
         break;
      case 'Clone Hero':
         setCScores((cScores)=> cScores=scores)
         break;
      case 'Music Diver':
         setMScores((mScores)=> mScores=scores)
         break;
    }
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
  <div className='app'>
  <h1>Rhythm Game Record Recorder</h1>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home dScores={dScores} mScores={mScores} cScores={cScores}/>}/>
    <Route path='/add-score' element={<HighScoreForum handleScoreSubmit={handleScoreSubmit}/>}/>
    <Route path='/ddr' element={<DDR scores={dScores} handleDelete={handleScoreDelete} setScores={setScores}/>}/>
    <Route path='/clone-hero' element={<CloneHero scores={cScores} handleDelete={handleScoreDelete} setScores={setScores}/>}/>
    <Route path='/music-diver' element={<MusicDiver scores={mScores} handleDelete={handleScoreDelete}setScores={setScores}/>}/>
    </Routes>
  </div>
  )
}

export default App;
