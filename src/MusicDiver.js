import React from "react";
import ScoreContainer from "./ScoreContainer";


function MusicDiver({scores, handleDelete, setScores}){
    return(
       
        <div>
        <h1>Music Diver </h1>
        <img alt="Music Diver logo" src="https://arcadebelgium.com/forum/pix22/musicdiver_logo.png"/>
        <ScoreContainer handleDelete={handleDelete} scores={scores}  setScores={setScores}/>
        </div>
    )

}




export default MusicDiver