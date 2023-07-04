import React,{useState} from "react";

function HighScoreForum(){
    const [gameType, setGameType] = useState()
    const[songName, setSongName] = useState('')
    const [songLink, setSongLink] = useState('')
    const [score, setScore] = useState(0)
    const[date, setDate] = useState()




    return(
        <div className="high-score-forum">
            <h1>Put your high scores here</h1>
            <form>
                <label>Game Type</label>
                <select>
                    <option>Dance Dance Revolution</option>
                    <option>Clone Hero</option>
                    <option>Music Diver</option>
                </select>

                <label>Song Name</label>
                <input type="text" required></input>

                <label>Song link</label>
                <input type="text" required></input>

                <label>Score</label>
                <input type="number" required></input>

                <label>Date Achieved</label>
                <input type="date" required></input>
                <button>Submit Score</button>
            </form>
        </div>
    )
}

export default HighScoreForum