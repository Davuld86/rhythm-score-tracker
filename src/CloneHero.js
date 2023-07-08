import React from "react";
import ScoreContainer from "./ScoreContainer";

function CloneHero({scores, handleDelete, setScores}){
    return (
        <div>
        <h1>Clone Hero Records</h1>
        <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/577ef1154f3240ad5b9b413aa7346a1e.png" alt="Clone Hero logo"/>
        <ScoreContainer handleDelete={handleDelete} scores={scores} setScores={setScores}/>
        </div>
    )
}

export default CloneHero