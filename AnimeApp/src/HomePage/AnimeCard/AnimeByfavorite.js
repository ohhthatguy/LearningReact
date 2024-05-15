
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Animecard.css'


const AnimeByfavorite = (props) => {

   
    const [fetchedFavoriteData, setFetchedFavoriteData] = useState([]);
    const [ready, setReady] = useState();




   

    function fetchSearchedData(){
      const baseUrl = "https://api.jikan.moe/v4/top/anime";
     
  
      //query
      const queryParam = {
          type: "tv",
          filter: `favorite`,
          sfw: true,
          
        };
  
      const url = new URL(baseUrl);
    //   console.log(url)

      Object.keys(queryParam).forEach(ele=> url.searchParams.append(ele, queryParam[ele]));
                      fetch(url)
                      .then(res=>{
                        setReady(res.status);
                        return res.json()})
                      .then(resData => {

                        setFetchedFavoriteData(resData);
    // setReady(true);

                      
                      })
                      .catch(err=>console.log(err));
  }

  useEffect(()=>{

        fetchSearchedData();

  },[]);

  console.log(fetchedFavoriteData);

  if(ready==200){

      return (<div className='blue_color'>
        <span className='Popular_today'>Mass favorite</span>
        <div className='card_body_container'>
            {
                   fetchedFavoriteData.data.map(e=>(

                        <div className='card_body'>
                        
                            <Link to={`/anime/${e.mal_id}`} key={e.mal_id} >

                                <img className='card_img' src={e.images.jpg.image_url} alt='anime card' ></img>
                    
                            </Link>
                            
                                <div className='card_name'>
                                {e.title}
                            </div>

                            <div className='card_episode'>
                                Episode: {e.episodes}
                            </div>

                            <div className='card_score'>
                                {e.score}
                            </div>

                        </div>
                    
                   )) 

                }
        </div>

        </div>)


    }else{
        return (<div>Loading please wait</div>)
    }
}

    export default AnimeByfavorite