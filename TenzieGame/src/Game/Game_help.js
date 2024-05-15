import React,{forwardRef} from 'react'
import './Game_help.css'

const Game_help = forwardRef((props,ref) => {

  if(props.help){

      return (<div  className='gameHelp'>

      <ul className='Rules_Wrapper'>
      <label className='Rules'>Rules</label>

        <li>Initially, Select a card and double click to lock it.</li>
        <li>Try to lock other cards having the same numbers.</li>
        <li>The player with most locked card wins.</li>
      </ul>

      <ul  className='Powerups_wrapper'>
      <label ref={ref} className='PowerUps'>PowerUps</label>
        <li>PowerUps can be used five times.</li>
        <li>This randomizes card giving a chance to lock more similar card.</li>
      </ul>
  
      
    </div>)
  
  }else{
    return (<div>

    </div>)
  }



})

export default Game_help