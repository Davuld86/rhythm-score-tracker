import React,{useState} from "react";
import './Form.css'

function HighScoreForum({handleScoreSubmit}){
    const formDefault ={gameType:'Dance Dance Revolution',songName: '', songLink: '', highScore: '', date: ''}
    const[formData, setFormData] = useState({gameType:'Dance Dance Revolution', songName: '', songLink: '', highScore: '', date: ''})

    function handleGameType(e){
        setFormData({
            ...formData,
            gameType:e.target.value
        })
    }

    function handleSongName(e){
        setFormData({
            ...formData,
            songName:e.target.value
        })
    }
    function handleSongLink(e){
        setFormData({
            ...formData,
            songLink:e.target.value
        })
    }
    function handleScore(e){
        setFormData({
            ...formData,
            highScore:e.target.value
        })
    }
    function handleDate(e){
        setFormData({
            ...formData,
            date:e.target.value
        })
    }

    return(
        <div className="formPage">
            <h1>Put your high scores here</h1>
            <form className='form' onSubmit={(e)=>{e.preventDefault();handleScoreSubmit(formData); setFormData(formDefault)}}>
                <label>Game Type</label>
                <select value={formData.gameType} onChange={(e)=> handleGameType(e)}>
                    <option>Dance Dance Revolution</option>
                    <option>Clone Hero</option>
                    <option>Music Diver</option>
                </select>
                <label>Song Name</label>
                <input type="text" required value={formData.songName} onChange={(e)=> handleSongName(e)}></input>

                <label>Video link to song</label>
                <input type="text" required value={formData.songLink} onChange={(e)=>handleSongLink(e)}></input>

                <label>Score</label>
                <input type="number" required placeholder="0" value={formData.highScore} onChange={(e)=> handleScore(e)}></input>

                <label>Date Achieved</label>
                <input type="date"  required value={formData.date} onChange={(e)=>handleDate(e)}></input>
                <button>Submit Score</button>
            </form>
        </div>
    )
}
export default HighScoreForum