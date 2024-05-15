import React from 'react'
import './Game_finished.css'


const Game_finished = (props) => {
  return (<div className='Finish_card'>

    {
        `Final Score: ${props.score}`
    }

  </div>)
  
}

export default Game_finished