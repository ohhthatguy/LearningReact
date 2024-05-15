import React, {useRef} from 'react';
import './App.css';

import HeroNavBar from './Hero/HeroNavBar';
import Hero_Main from './Hero/Hero_Main';
import Game from './Game/Game';
import Game_creater from './Game/Game_creater';




function App(){

    const gameRef = useRef(null);
    
    
    function handleGameScroll(){
        // console.log("btn clicked play");
        // console.log(gameRef)
        gameRef.current.scrollIntoView({behavior:'smooth'})
        
    }

    
 
    return (<div className='App'>

        <HeroNavBar handleGameScroll={handleGameScroll}/>
        <Hero_Main handleGameScroll = {handleGameScroll}/>
        <Game ref = {gameRef}/>
        <Game_creater />
        
    
    </div>);

}

export default App;
