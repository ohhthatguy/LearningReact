import React,{useState, useEffect} from 'react'
import './AnimeCharacters.css'

const AnimeCharacters = (props) => {
      
    const [animeCharacters, setAnimeCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);
    
    //Charater data
  function fetchAnimeCharacters(){
    fetch(`https://api.jikan.moe/v4/anime/${props.id}/characters`)
    .then(res=> res.json())
    .then(data=> {
          // console.log(data)
        //   animePictures = data;
          setAnimeCharacters(data);
          // console.log(animePictures)
        });
  }

  if(animeCharacters.length != 0){

        console.log(animeCharacters.data)
  }else{
    console.log('fetching...');
  }


  useEffect(()=>{
    fetchAnimeCharacters();
  },[])
  return (<div className='container_char'>RELATED CHARACTERS: 
   <span className='ToggleCharacterPic' onClick={()=>setShowMore(!showMore)}>See More</span>
     <div className={(showMore == false) ? 'animeCharacterContainer' : 'animeCharacterContainer_yes'}>
    
             {
          (animeCharacters.length != 0) ?
          
            animeCharacters.data.map(e=>(<div className='animeCharacterWrapper'>
                <img className='CharacterPic' src={e.character.images.jpg.image_url} alt='some character pic'></img>
                <div className='CharacterName'>{e.character.name}</div>
                <div className='CharacterRole'>({e.role} role)</div>

            </div>))

            :

            <div>FETCHING DATA </div>
          
    }
    </div>
   </div>)
}

export default AnimeCharacters