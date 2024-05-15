import React from 'react'
import './Game_creater.css'

const Game_creater = () => {

    
    function showcreater(){
        const instagramUsername = "bus_karr"
        window.open(`https://www.instagram.com/${instagramUsername}`, '')
    }
  return (<div className='Creater'>Made by <span onClick={showcreater} className='CreaterName'> Bhaskar Thakulla</span></div>)
}

export default Game_creater