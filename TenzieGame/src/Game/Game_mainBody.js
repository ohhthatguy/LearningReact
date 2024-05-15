import React,{forwardRef} from 'react'
import './Game_mainBody.css'
import Game_finished from './Game_finished';

const Game_mainBody =forwardRef((props,ref) => {

    
   
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    

    if(!props.isFinished){
      
              return (
                    <div ref={ref} className='mainGame'>
    
            {
                
                numbers.map((e,index)=>(
                    
                <button className= 'Number_container'  key={index} onClick={props.handleClick}>{e}</button>
                

                ))


            }

       </div>)
  }else{
    return (
      <Game_finished score = {props.score} />
    )


  }


})

export default Game_mainBody