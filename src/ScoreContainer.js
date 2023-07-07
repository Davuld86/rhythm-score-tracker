import React,{useState} from "react";
import Score from "./Score";
import FilterBar from "./FilterBar";

function ScoreContainer({scores, handleDelete, setScores}){
    const [deleteMode,setDeleteMode] = useState(false)

    function handleDeleteMode(e){
        setDeleteMode(!deleteMode)
    }
    
    function handleSort(e){
        let temp = []
        switch(e.target.value){
          case 'Song Name (A-Z)':
            temp= scores.sort((a,b)=> b.songName<a.songName? 1:-1)
            break;
          case 'Score (high to low)':
            temp = scores.sort((a,b)=> b.highScore - a.highScore)
            break;
          case 'Date (recent)':
            temp = scores.sort((a,b)=> new Date(b.date) - new Date(a.date))
            break;
        }
        setScores([...temp])
      }
    

    return(
    <div>
        <h1>Songs go here</h1>
        <FilterBar handleDeleteMode={handleDeleteMode} deleteMode={deleteMode} handleSort={handleSort}/>
         {scores.map((score)=>
         <Score key={score.id} score={score} deleteMode={deleteMode} handleDelete={handleDelete}/>
         )}
    </div>  
    ) 
}


export default ScoreContainer