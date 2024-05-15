import React from 'react'
import './HomePage.css'
import HeroBackground from './Hero/HeroBackground'
import AnimeBypopularity from './AnimeCard/AnimeBypopularity'
import AnimeByAiring from './AnimeCard/AnimeByAiring'
import AnimeByupcoming from './AnimeCard/AnimeByupcoming'
import AnimeByfavorite from './AnimeCard/AnimeByfavorite'

const HomePage = (props) => {
  return (
    <div className='HomePage'>
        <HeroBackground temp={props.temp}/>
       
       
        <AnimeBypopularity/>
        <AnimeByAiring />
        {/* <AnimeByupcoming /> */}
        {/* <AnimeByfavorite /> */}

      
        
    </div>
  )
}

export default HomePage