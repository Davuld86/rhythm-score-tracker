import React from 'react'
import Score from './Score';

function HomeScoreContainer({game,scores}) {
    let image = ''
    switch(game){
        case 'DDR':
            image = 'https://systemshuffle.files.wordpress.com/2013/09/ddr2009logo.png'
            break;
        case 'Clone Hero':
            image = 'https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/577ef1154f3240ad5b9b413aa7346a1e.png'
            break;
        case 'Music Diver':
            image ='https://arcadebelgium.com/forum/pix22/musicdiver_logo.png'
            break;
        }
        scores.sort((a,b)=> new Date(b.date) - new Date(a.date))
  return (
    <div>
        <h3>Recent {game} records:
        <img src={image} alt={game}/>
        </h3>
        {scores.map((score)=><Score key={score.id} score={score}/>)}
    </div>
  )
}

export default HomeScoreContainer