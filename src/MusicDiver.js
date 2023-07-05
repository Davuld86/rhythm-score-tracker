import React from "react";
import ScoreContainer from "./ScoreContainer";


function MusicDiver({scores}){
    return(
       
        <div>
        <h1>Music Diver </h1>
        <img alt="Music Diver logo" src="https://arcadebelgium.com/forum/pix22/musicdiver_logo.png"/>
        <ScoreContainer scores={scores}/>
        </div>
    )

}




export default MusicDiver