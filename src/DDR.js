import React from "react";
import ScoreContainer from "./ScoreContainer";

function DDR({scores, handleDelete}){
    return (
        <div>
        <h1>DDR</h1>
        <img alt="DDR logo" src="https://systemshuffle.files.wordpress.com/2013/09/ddr2009logo.png"/>
        <ScoreContainer handleDelete={handleDelete} scores={scores}/>
        </div>
    )
}


export default DDR