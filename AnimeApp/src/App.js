import React, {useEffect, useState} from 'react'
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import ResultAfterSearchClick from './CardAfterSearch/ResultAfterSearchClick'
import Navbar_container from './Navbar/Navbar_container'
import ListPage from './List/ListPage'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import CardAfterClick from './CardAfterClick/CardAfterClick'
import CardAfterSearch from './CardAfterSearch/CardAfterSearch'


const App = () => {

  const [temp, setTemp] = useState([]);
  const [state, setState] = useState(false);
  const [searchedData, setSearchedData] = useState('');
  useEffect(()=>{
  
    fetch(`https://api.jikan.moe/v4/top/anime`)
                    .then(res=>res.json())
                    .then(resData => {
                      setTemp(resData);
                      setState(true);
                    })
                    .catch(err=>console.log(err));

 },[]);


//  useEffect(()=>{
  
//     fetch(`https://api.jikan.moe/v4/top/anime`)
//                     .then(res=>res.json())
//                     .then(resData => {
//                       setTemp(resData);
//                       setState(true);
//                     })
//                     .catch(err=>console.log(err));

//  },[]);



 function getSearchData(data){
  setSearchedData(data.target.value);
 }

// console.log(searchedData);


  return (
    <div>
     
      <Navbar_container getSearchData = {getSearchData}/>

      <Routes>
        <Route path='/' element={state &&  <HomePage temp={temp} /> } ></Route>
        <Route path='/List' element={state && <ListPage temp={temp} />} />
        <Route path='/anime/:id' element={ <CardAfterClick temp={temp} /> } />
        <Route path='/Search' element={<CardAfterSearch searchedData={searchedData}/>} /> 
        <Route path='/Search/:id' element={<ResultAfterSearchClick />} />


      </Routes>
      
      <Footer />
    </div>
    
  )
}

export default App