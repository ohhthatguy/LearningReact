import React, {  useState, useRef, forwardRef } from 'react'
import './Game.css'
import Game_mainBody from './Game_mainBody';
import Game_powerUpRender from './Game_powerUpRender';
import Game_help from './Game_help';




const Game = forwardRef((props,ref) => {

   
    const helpRef = useRef(null);
    const [score, setScore] = useState(0);
    const [store,setStore] = useState(true);
    const [firstNum, setFirstNum]= useState('');
    const [powerUp, setPowerUp] = useState(5);
    const [isFinished, setIsFinished] = useState(false);
    const [handleHelp, setHandleHelp] = useState(false);

   
    function gameFinish(){
        console.log(`Your score: ${score}`);
        setIsFinished(true);
    }


    function getChild(){
        const parentDiv_notclicked = document.querySelectorAll('.Number_container');
        // console.log(parentDiv_notclicked);

        const parentDiv_clicked = document.querySelectorAll('.afterClick');
        // console.log(parentDiv_clicked);

        const childrenInsideParent = [...parentDiv_notclicked, ...parentDiv_clicked];
        return childrenInsideParent;
    }

    function handleClick(elements){
       
            // store the first num clicked and store it
            

            if(store){
                
                setStore(false);
                setFirstNum(elements.target.innerHTML);
                // console.log(firstNum);

                // firstNumed = elements.target.innerHTML;
                // console.log(firstNumed);

            }

            // console.log(firstNumed);

           
            //change color to red and randomize

            if((elements.target.className == "Number_container")  && (elements.target.innerHTML == firstNum) ){

                // console.log("Im inisde");
                                
                elements.target.className = "afterClick";
                
               

                const child = getChild();
                // console.log(child);

                //randomize but if double click dont change any data
                //childrenInsideParent
                child.map(e =>{

                    if(e.className != 'afterClick' && elements.target.className == 'afterClick'){
                        const num = Math.floor(Math.random()*10);
                        e.innerHTML= num;

                    }

        
                })


                setScore(score+1);


            }


    }

    function usePower(ele){
        //randomize but if double click  change  data. used as lifeline
        const child = getChild();
        // console.log(child);
        if(Array.isArray(child)){
           
            child.map(e =>{

                if(e.className != 'afterClick'){
                    const num = Math.floor(Math.random()*10);
                    e.innerHTML= num;
                }
        
            })
        }

        if(powerUp>=2){

            setPowerUp(powerUp - 1);
            // console.log(powerUp);
            
        }else{
            setPowerUp(powerUp - 1);

            // console.log(ele);
            // console.log(powerUp);
            ele.target.style.display = 'none';
            // ele.target.className = 'stoned';
            gameFinish();

            
        }
    }


    function resetGame(){
        // console.log("eofjosidfjo");
        // console.log(child);
         let i =0;
        const child = getChild();
         if(Array.isArray(child)){
                child.map(e=>{
                e.className = 'Number_container';
                e.innerHTML = Math.floor(Math.random()*10);

                // e.innerHTML = numbers[i++];
            })
  
            i++;
        }
        // bring back the use power btn
        const btns = [...document.querySelectorAll('button')];
        // console.log(btns);


        btns.map(b=>{
            if(b.className == 'UsePower'){
            // console.log(b);
            b.style.display = 'block';
            }
        })
        //set powerup to 5 again
        setPowerUp(5);

        //changed the finnished stated
        setIsFinished(false);

        //set score to 0
        setScore(0);
            
    }

    function showHelp(){
        
        (handleHelp) ? setHandleHelp(false) : setHandleHelp(true);

        if(handleHelp){
            
                // console.log("help btn clicked ");
                // console.log(helpRef)
                helpRef.current.scrollIntoView({behavior:'smooth'})
                
            
        }
    }


  return ( <div className='Game_container'>

    <div  className='Game_wrapper'>

        <div className='showScore'>{`Score: ${score}`}</div>

        <div  className='gameTitle'>Tenzie</div>

        <Game_mainBody ref={ref} score={score} handleClick={handleClick} isFinished={isFinished} />
   
        <div className='Game_powerup_wrapper'>

            <Game_powerUpRender powerUp = {powerUp} />


            <div className='Game_btns'>
                <button className='ResetBtn' onClick={resetGame}>Reset</button>
                <button className='HelpBtn' onClick={showHelp} >Help</button>
                <button className='UsePower' onClick={usePower}>Use Power</button>
            </div>

        </div>

        <Game_help ref = {helpRef} help = {handleHelp} />

    </div>
     
</div>
)
})

export default Game