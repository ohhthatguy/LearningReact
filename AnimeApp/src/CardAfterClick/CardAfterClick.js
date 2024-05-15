import React,{useState} from 'react'
import './CardAfterClick.css'
import { useParams } from 'react-router-dom'
import PhotoGalary from './PhotoGalary'
import AnimeCharacters from './AnimeCharacters'

const CardAfterClick = (props) => {
  const AnimeId = useParams();
  // console.log(props.temp);
  const [showFullSynapsis, setShowFullSynapsis] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  let ClickedAnimeData = {
    AnimeSmallImage: '',
    AnimeBigImage: '',
    AnimeBackGroundImage: '',
    AnimeName: '',
    AnimeScore: '',
    AnimeSynopsis: '',
    AnimeTrailer: '',
    AnimeStatus: '',
    AnimeRating: ''
  }

  props.temp.data.map(e=>{
    if(e.mal_id == AnimeId.id){
        ClickedAnimeData = {
          AnimeSmallImage: e.images.jpg.image_url,
          AnimeBigImage: e.images.jpg.large_image_url,
          AnimeBackGroundImage: e.trailer.images.maximum_image_url,
          AnimeName: e.title,
          AnimeScore: e.score,
          AnimeSynopsis: e.synopsis,
          AnimeTrailer: e.images.url,
          AnimeRating: e.status,
          AnimeRating: e.rating
        }
    }
  })

  

  return (<div className='CardAfterClickContainer'>
    
      <div className='AnimeImgContainer'>

        {
          (ClickedAnimeData.AnimeBackGroundImage != null) ?

          <img className='AnimeImgBackGround' src={ClickedAnimeData.AnimeBackGroundImage} alt='Anime bg'></img>

          :
          <div></div>
        }

          <img className={(ClickedAnimeData.AnimeBackGroundImage != null) ? 'AnimeProfileImg' : 'AnimeProfileImg_NULL'} src={(ClickedAnimeData.AnimeBackGroundImage != null) ? ClickedAnimeData.AnimeSmallImage : ClickedAnimeData.AnimeBigImage} alt='anime profile img'></img>

        
      </div>

      <div className='AnimeTextContent'>
        
        <div className='AnimeName'>{ClickedAnimeData.AnimeName}</div>
        <div className='AnimeRatingAndScore'>{ClickedAnimeData.AnimeRating} | {ClickedAnimeData.AnimeScore}/10</div>
        
        <div className='AnimeSynopsisContainer'>

        Synapsis: 
        <div>
          
          <div className={ (showFullSynapsis ==false ) ? 'AnimeSynopsisContent' : 'AnimeSynopsisContent_toggle'}>
          {ClickedAnimeData.AnimeSynopsis}
        </div>
          <span className='MoreSynopsis' onClick={()=>setShowFullSynapsis(!showFullSynapsis)}>MORE DETAILS</span>
          </div>

          <PhotoGalary id={AnimeId.id}/> 

          <AnimeCharacters id={AnimeId.id} />


        
      </div>

      

      </div>

        


    </div>)
}

export default CardAfterClick