import React from 'react'
import { Link } from 'react-router-dom';
import './AnimeByGenre.css'

const AnimeByGenre = (props) => {

    console.log(props.temp);
 
  return (<div className='AnimeCardContainer'>
    
        {    
            props.temp.data.map(e=>(
                e.genres.map(ele => (
                    // console.log(props.genre)
                    (ele.name == props.genre) ? 
                    //  console.log(`Matched: ${ele.name} & ${props.genre}`)
                    <div className='AnimeCard'>
                        <Link to={`/anime/${e.mal_id}`}>
                            <img className='AnimeByGenreImg' src={e.images.jpg.image_url} alt='anime by genre'></img>
                            <div className='AnimeByGenreTitle'>{e.title}</div>
                            <div className='AnimeByGenreScore'>Rating: {e.score}</div>
                        </Link>
                    </div>
                     :
                     <div className='RejectedAnimeCard'>Rejected anime card</div>
                    
                ))
            ))
            
        }

   </div>)

}

export default AnimeByGenre