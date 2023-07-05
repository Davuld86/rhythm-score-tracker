import React,{useState} from "react";

function HighScoreForum({handleScoreSubmit}){
    const formDefault ={ songName: '', songLink: '', highScore: '', date: ''}
    const [gameType, setGameType] = useState('Dance Dance Revolution')
   
    const[formData, setFormData] = useState({ songName: '', songLink: '', highScore: '', date: ''})

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
        <div className="high-score-forum">
            <h1>Put your high scores here</h1>
            <form onSubmit={(e)=>{e.preventDefault();handleScoreSubmit(gameType,formData); setFormData(formDefault)}}>
                <label>Game Type</label>
                <select value={gameType} onChange={(e)=> setGameType(e.target.value)}>
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