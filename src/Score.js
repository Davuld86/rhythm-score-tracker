import React, { Fragment } from "react";
import dateFormat from "dateformat";
import VideoEmbed from "./VideoEmbed";


function Score({score, deleteMode, handleDelete}){
    return(
<Fragment>
    <h3>{score.songName}</h3>
    <h4>Record: {score.highScore}</h4>
    <VideoEmbed link={score.songLink}/>
    <h5>Recorded on: {dateFormat(score.date, 'mmm d,yyyy')}</h5>
    {deleteMode==false|| deleteMode == undefined ? null: <button onClick={()=>handleDelete(score)}>Remove this Record</button> }
</Fragment>
    )
}

export default Score