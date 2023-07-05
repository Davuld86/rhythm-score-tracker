import React from "react";
import HomeScoreContainer from "./HomeScoreContainer";


function Home({dScores,cScores,mScores}){
    return(
        <div className="home">
        <h1>home</h1>
        <HomeScoreContainer game={'DDR'} scores={dScores}/>
        <HomeScoreContainer game={'Clone Hero'} scores={cScores}/>
        <HomeScoreContainer game={'Music Diver'} scores={mScores}/>
        </div>
    )
}

export default Home