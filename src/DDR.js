import React from "react";
import ScoreContainer from "./ScoreContainer";
import './DDR.css'

function DDR({scores, handleDelete, setScores}){
    return (
        <div className='page'>
        <div className= 'DDRheader'>
        <h1 style={{textAlign:'center'}}>DDR Records</h1>
        <img alt="DDR logo" src="https://systemshuffle.files.wordpress.com/2013/09/ddr2009logo.png"/>
        </div>
        <ScoreContainer handleDelete={handleDelete} scores={scores} setScores={setScores}/>
        </div>
    )
}


export default DDR