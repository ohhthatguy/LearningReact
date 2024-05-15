import React from 'react'
import './Hero_Main.css'
import hero from './hero.jpg'

const Hero_Main = (props) => {
  
  return (
    <div className='HeroMainContainer'>

        <div className='Hero_img'>
            <img src={hero} alt='Hero Icon' />
        </div>

        <div className='Hero_Content'>
            <p>PLAY  THE  GAME</p>
            <div className='hero_btn_container'>
                <button className='hero_btn' onClick={props.handleGameScroll} >Play Now</button>
            </div>

        </div>
        
    </div>
  )
}

export default Hero_Main