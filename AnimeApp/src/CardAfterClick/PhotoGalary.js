import React, {useState, useEffect} from 'react'
import './PhotoGalary.css'

const PhotoGalary = (props) => {

  
    const [animePictures, setAnimePictures] = useState([]);
    const [showMore, setShowMore] = useState(false);
    
    //ANIME PICTURES
  function fetchAnimePictures(){
    fetch(`https://api.jikan.moe/v4/anime/${props.id}/pictures`)
    .then(res=> res.json())
    .then(data=> {
          // console.log(data)
        //   animePictures = data;
          setAnimePictures(data);
          // console.log(animePictures)
        });
  }

//   if(animePictures.length != 0){

//         console.log(animePictures.data)
//   }else{
//     console.log('fetching...');
//   }


  useEffect(()=>{
    fetchAnimePictures();
  },[])

    // console.log(props.id);
  return (<div className='container_anime'> ANIME SNAPSHOTS:
            <span className='ToggleAnimePic' onClick={()=>setShowMore(!showMore)}>See More</span>
    <div className={(showMore == false) ? 'PhotoGalaryContainer' : 'PhotoGalaryContainer_yes'}>
        
   
    {
          (animePictures.length != 0) ?
          
            animePictures.data.map(e=>(<div className='animePicwrapper'>
                <img className='animePic' src={e.jpg.image_url} alt='some anime pic'></img>
            </div>))

            :

            <div>FETCHING DATA </div>
          
    }
    

  

    </div>
    </div>)
}

export default PhotoGalary