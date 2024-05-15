import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CardAfterSearch.css'

const CardAfterSearch = (props) => {
    // console.log(props.searchedData)
    const [fetchedData, setFetchedData] = useState([]);

    function fetchSearchedData(){
      const baseUrl = "https://api.jikan.moe/v4";
      const endPoint = "/anime";
  
      //query
      const queryParam = {
          // filter: "genres",  //"genres" "explicit_genres" "themes" "demographics"
          q: props.searchedData,
          type: "tv",
          sfw: true,
          order_by: "popularity",
          sort: "asc",
          // letter: props.searchedData
        };
  
      const url = new URL(baseUrl + endPoint);
      console.log(url)

      Object.keys(queryParam).forEach(e=> url.searchParams.append(e, queryParam[e]));
                      fetch(url)
                      .then(res=>res.json())
                      .then(resData => {
                        setFetchedData(resData);
                      
                      })
                      .catch(err=>console.log(err));
  }

  useEffect(()=>{
    
    fetchSearchedData();
    
  },[]);

  console.log(fetchedData);
  // console.log(props.searchedData);
  return (<div className='searchedDatacontainer'>
   
        {/* CardAfterSearch, {props.searchedData} */}

       
        {
              (fetchedData.length != 0) ?
              
                fetchedData.data.map(e=>(<div className='searchPicwrapper'>
<Link to={`/Search/${e.mal_id}`}>
                    <img className='searchPic' key={e.mal_id} src={e.images.jpg.image_url} alt='some anime pic'></img>
                    <div className='searchTitle'>{e.title}</div>
                    </Link>  
                </div>))
    
                :
    
                <div>FETCHING DATA </div>
              
        }
        
    </div>)
}

export default CardAfterSearch