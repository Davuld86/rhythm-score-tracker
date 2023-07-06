import React,{useState} from "react";
import Score from "./Score";
import FilterBar from "./FilterBar";

function ScoreContainer({scores, handleDelete}){
    const [deleteMode,setDeleteMode] = useState(false)

    function handleDeleteMode(e){
        setDeleteMode(!deleteMode)
        console.log(deleteMode)
    }

    return(
    <div>
        <h1>Songs go here</h1>
        <FilterBar handleDeleteMode={handleDeleteMode} deleteMode={deleteMode}/>
         {scores.map((score)=>
         <Score key={score.id} score={score} deleteMode={deleteMode} handleDelete={handleDelete}/>
         )}
    </div>  
    ) 
}


export default ScoreContainer