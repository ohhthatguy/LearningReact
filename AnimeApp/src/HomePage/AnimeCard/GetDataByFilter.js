import React, {useState, useEffect} from 'react'
import './GetDataByFilter.css'


const GetDataByFilter = () => {

    const [fetchedAiringData, setFetchedAiringData] = useState([]);
    const [fetchedUpcomingData, setFetchedUpcomingData] = useState([]);
    const [fetchedFavoriteData, setFetchedFavoriteData] = useState([]);
    const [fetchedByPopularityData, setFetchedByPopularityData] = useState([]);




    const queryFilter = ["airing", "upcoming", "bypopularity", "favorite"];

    function fetchSearchedData(e){
      const baseUrl = "https://api.jikan.moe/v4/top/anime";
     
  
      //query
      const queryParam = {
          type: "tv",
          filter: `${e}`,
          sfw: true,
          
        };
  
      const url = new URL(baseUrl);
    //   console.log(url)

      Object.keys(queryParam).forEach(ele=> url.searchParams.append(ele, queryParam[ele]));
                      fetch(url)
                      .then(res=>res.json())
                      .then(resData => {
                        switch(e){
                            case "airing":
                            setFetchedAiringData(resData);
                            break;

                            case "upcoming":
                            setFetchedUpcomingData(resData);
                            break;

                            case "bypopularity":
                            setFetchedByPopularityData(resData);
                            break;

                            case "favorite":
                            setFetchedFavoriteData(resData);
                            break;

                        }
                        
                      
                      })
                      .catch(err=>console.log(err));
  }

  useEffect(()=>{
    queryFilter.map(e=>{
        fetchSearchedData(e);
    })
    
    
    
  },[]);

  console.log(fetchedAiringData);
  console.log(fetchedUpcomingData);
  console.log(fetchedFavoriteData);
  console.log(fetchedByPopularityData);

  return (
    <div>GetDataByFilter</div>
  )
}

export default GetDataByFilter