import React from 'react'
import Score from './Score';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

function HomeScoreContainer({game,scores}) {
    let path =''
    let image = ''
    switch(game){
        case 'DDR':
            image = 'https://systemshuffle.files.wordpress.com/2013/09/ddr2009logo.png'
            path ='/ddr'
            break;
        case 'Clone Hero':
            image = 'https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/577ef1154f3240ad5b9b413aa7346a1e.png'
            path= '/clone-hero'
            break;
        case 'Music Diver':
            image ='https://arcadebelgium.com/forum/pix22/musicdiver_logo.png'
            path = '/music-diver'
            break;
        }
        scores.slice(0,scores.length >=8? 8: scores.length).sort((a,b)=> new Date(b.date) - new Date(a.date))
  return (
    <div>
        <img src={image} alt={game}/>
        <h2>Recent {game} records:</h2>
        {scores.map((score)=><Score key={score.id} score={score}/>)}
        <div className='seeMore'>
        <Link to={path}>
        <span>See more scores</span>
        <FaIcons.FaArrowCircleRight/>
        </Link>
        </div>
    </div>
  )
}

export default HomeScoreContainer