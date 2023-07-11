import React from "react";
import ScoreContainer from "./ScoreContainer";
import './CloneHero.css'

function CloneHero({scores, handleDelete, setScores}){
    return (
        <div className='CHpage'>

        <div className='CHHeader'>
        <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/577ef1154f3240ad5b9b413aa7346a1e.png" alt="Clone Hero logo"/>
        </div>
        
        <ScoreContainer handleDelete={handleDelete} scores={scores} setScores={setScores}/>
        </div>
    )
}

export default CloneHero