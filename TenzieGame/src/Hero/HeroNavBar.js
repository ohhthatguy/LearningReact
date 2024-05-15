import React from 'react'
import './HeroNavBar.css'
import logo from './logo.png'

const HeroNavBar = (props) => {


  return (<div className='NavBar_container'>

        
        <img className='logo' src={logo} alt='LOGO' />
       
        
        <div className='navbar_options'>
            <span className='Navbar_option'>Home</span>
            <span className='Navbar_option' onClick={props.handleGameScroll} >Game</span>
            
            <span className='Navbar_option' onClick={props.handleGameScroll} >Help</span>
        </div>


    </div>)
  
}

export default HeroNavBar;