import React from 'react'
import './HeroScoreCard.css'

const HeroScoreCard = (props) => {
  return (
    <span className='Hero_score'>{props.score}</span>
  )
}

export default HeroScoreCard