import React from "react";
import ScoreContainer from "./ScoreContainer";
import './MusicDiver.css'


function MusicDiver({scores, handleDelete, setScores}){
    return(
        <div className='MDpage'>
        <div className='MDheader'>
        <h1>Music Diver Records</h1>
        <img alt="Music Diver logo" src="https://arcadebelgium.com/forum/pix22/musicdiver_logo.png"/>
        </div>
        <ScoreContainer handleDelete={handleDelete} scores={scores}  setScores={setScores}/>
        </div>
    )

}




export default MusicDiver