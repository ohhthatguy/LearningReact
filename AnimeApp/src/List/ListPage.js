import React, { useState, useEffect } from 'react'
import './ListPage.css'
import AnimeByGenre from './AnimeByGenre';

const ListPage = (props) => {

    const [listData, setListData] = useState([]);
  

    function fetchData(){
        const baseUrl = "https://api.jikan.moe/v4/";
        const endPoint = "genres/anime";
    
        //query
        const queryParam = {
            filter: "genres",  //"genres" "explicit_genres" "themes" "demographics"
        };
    
        const url = new URL(baseUrl + endPoint);
        Object.keys(queryParam).forEach(e=> url.searchParams.append(e, queryParam[e]));
                        fetch(url)
                        .then(res=>res.json())
                        .then(resData => {
                          setListData(resData);
                        
                        })
                        .catch(err=>console.log(err));
    }



    useEffect(()=>{
                fetchData();        
     },[]);

    //  listData.length != 0 ? console.log(listData.data.map(e=>console.log(e.name))) : console.log('Loading');
     
    // console.log(listData);
    //  console.log(listData.data.map(e=>console.log(e.name)));

  if( listData.length != 0){
  
  return (<div className='listPageContainer'>

                <div className='listTitle'>genre</div>
                
            {    
                listData.data.map(e=>(<div className='listPageTable'>                
               
                     <div className='genreName'>{e.name}</div>

                    {/* //make a component, pass the genre to the component, the component sould take the genre and return an whole list full of animes like in popular today section of home page  */}
                        <AnimeByGenre genre={e.name} temp={props.temp} /> 
                     </div>))
                
            }
    
    </div>)
}
}

export default ListPage