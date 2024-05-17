import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/Global'
import HeroPage from './HeroPage'
import Popularsection from './Popularsection'

const Homepage = () => {

    // const {state} = useContext(GlobalContext)
  
  return (
    
    <div >

      <HeroPage />
      <Popularsection />



    </div>


  )
}

export default Homepage