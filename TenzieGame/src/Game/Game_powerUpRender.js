import React from 'react'
import './Game_powerUpRender.css'
import powerup_icon from './Powerup.png'


const Game_powerUpRender = (props) => {

    // let icon = [];
    // for(let i=0; i< props.powerUp; i++){
    //         icon.push(<img className='powerup' key={i} src={powerup_icon} alt='powerup icon'></img>)
    // }

    
    if(props.powerUp >= 1) {  
        // console.log(props.powerUp);
        return (
        <div className='Powerups_icons'>
            {
                
               [...Array(props.powerUp)].map((e,index) => (
                <img className='powerup' key={index}  src={powerup_icon} alt='powerup icon'></img>
               ))
            }
        </div>
      )
    }else{
        return (
            <div className='Powerups_icons'>
                NO MORE POWERUPS
            </div>
          )
    }


}

export default Game_powerUpRender