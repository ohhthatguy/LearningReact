import React, {useState} from 'react'
import './HeroBackground.css'
import HeroScoreCard from './HeroScoreCard';



const HeroBackground = (props) => {

        // console.log(props.temp);
        const ytImg = props.temp.data[0].trailer.images.maximum_image_url;
        const topAnimeName = props.temp.data[0].title;
        const topAnimeGenre = props.temp.data[0].genres;

        

  return (
    <div className='Hero_container'>

        <div className='Hero_image_container'>

            <img className='Hero_image' src={ytImg} alt='ytimg' ></img>

            <div className='Hero_image_content'> 

                <div className='titleAndRating'>
                <label>{topAnimeName}</label>

                    <ul>
                    <HeroScoreCard score={props.temp.data[0].score} />

                        {
                            topAnimeGenre.map((e,index)=>(
                                <li key={index}>{e.name}</li>
                            ))
                            
                        }
                        
                    </ul>
                
                </div>


             </div>

        </div>
       
    </div>
  )
}

export default HeroBackground