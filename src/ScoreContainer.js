import React from "react";
import Score from "./Score";

function ScoreContainer({scores}){
    return(
    <div>
        <h1>Songs go here</h1>
         {scores.map((score)=>
         <Score key={score.id} score={score}/>
         )}
    </div>  
    ) 
}


export default ScoreContainer