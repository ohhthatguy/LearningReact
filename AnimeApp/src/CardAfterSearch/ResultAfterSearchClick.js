import React from 'react'
import './ResultAfterSearchClick.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PhotoGalary from '../CardAfterClick/PhotoGalary'
import AnimeCharacters from '../CardAfterClick/AnimeCharacters'

const ResultAfterSearchClick = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const AnimeId = useParams();
  const [showFullSynapsis, setShowFullSynapsis] = useState(false);
  const [ClickedAnimeData, setClickedAnimeData] = useState({
    AnimeSmallImage: '',
    AnimeBigImage: '',
    AnimeBackGroundImage: '',
    AnimeName: '',
    AnimeScore: '',
    AnimeSynopsis: '',
    AnimeTrailer: '',
    AnimeStatus: '',
    AnimeRating: ''
  });

  // let dataRelated =[];
  
  // let ClickedAnimeData = {
    // AnimeSmallImage: '',
    // AnimeBigImage: '',
    // AnimeBackGroundImage: '',
    // AnimeName: '',
    // AnimeScore: '',
    // AnimeSynopsis: '',
    // AnimeTrailer: '',
    // AnimeStatus: '',
    // AnimeRating: ''
  // }


  
   function fetchDataAfterSearchClick(){
    fetch(`https://api.jikan.moe/v4/anime/${AnimeId.id}`)
    .then(res=> res.json())
    .then(data=> {
            setClickedAnimeData({
              AnimeSmallImage: data.data.images.jpg.image_url,
              AnimeBigImage: data.data.images.jpg.large_image_url,
              AnimeBackGroundImage: data.data.trailer.images.maximum_image_url,
              AnimeName: data.data.title,
              AnimeScore: data.data.score,
              AnimeSynopsis: data.data.synopsis,
              AnimeTrailer: data.data.images.url,
              AnimeRating: data.data.status,
              AnimeRating: data.data.rating
            })
            setIsLoaded(true)

          }
        
           
    
          )
  
  
  }
  
  useEffect(()=>{
    fetchDataAfterSearchClick();
  }, []);

  // isLoaded == true ?  console.log(dataRelated) : console.log("fetching")

  
  if(isLoaded){
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

  } else{
  return (<div> No data / loading</div>)
  }


}



export default ResultAfterSearchClick;