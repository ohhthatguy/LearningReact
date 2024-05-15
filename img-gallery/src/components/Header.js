import React, {useContext, useState} from 'react'
import { GrGallery } from "react-icons/gr";


import {GlobalContext} from '../context/GlobalContext'

import './Header.css'

const Header = () => {
  const {setTotal, state, setInput, isClicked} = useContext(GlobalContext)

  const [userInput, setUserInput] = useState('');
  const [showSearchInfo, setShowSearchInfo] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState();

  // let searchedTerm;
  

  function handleClick(){
    console.log('clicked searched')
    setTotal(5)
   
    setInput(userInput)

    setSearchedTerm(userInput)
    setUserInput('')
    setShowSearchInfo(true)
  }

  function showcreater(){
    const instagramUsername = "bus_karr"
    window.open(`https://www.instagram.com/${instagramUsername}`, '')
}


  return (
    <div className={(isClicked) ? 'Hide_Header_con' : 'Header_container' }>
      <div className='galary' onClick={()=> showcreater()}>
      <GrGallery />
      </div>
      <div className='header_wrapper'>
      <input type='text' value={userInput} placeholder='search something...' onChange={(e)=>{setUserInput(e.target.value)}} />
      <button onClick={handleClick}>SUBMIT</button>
      </div>

      <div className={ (showSearchInfo) ? 'searchInfo' : 'hideSearchInfo'}>showing {state.length} results for '{searchedTerm}'</div>

    </div>
  )
}

export default Header