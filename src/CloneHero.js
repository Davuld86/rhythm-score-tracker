import React from "react";
import ScoreContainer from "./ScoreContainer";

function CloneHero({scores}){
    return (
        <div>
        <h1>Clone Hero</h1>
        <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/577ef1154f3240ad5b9b413aa7346a1e.png" alt="Clone Hero logo"/>
        <ScoreContainer scores={scores}/>
        </div>
    )
}

export default CloneHero