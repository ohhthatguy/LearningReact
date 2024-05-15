import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import './Landing.css'

const Landing = () => {

  const {state, setTotal} = useContext(GlobalContext)
  const [id, setId] =useState()

  function handleClick(){
    
    setTotal(prev=>prev+5)

  }
  
  
  return (

    
      (id) ?

      <div className='landing_container_when_clicked'>
         <div className='exit_btn'>
            <button onClick={()=>setId('')}>X</button>
            </div>
      {
        
        state.map((e)=>(
  
          (e.id == id ) && 

            <div className='landing_wrapper_when_clicked' key={e.id}>
           
            <img src={e.largeImageURL} />
            
          <div className='stats'>
            <div className='likes'>Likes: {e.likes}</div>
            <div className='author'>Author: {e.user}</div>
            <div className='views'>Views: {e.views}</div>
          </div>
          </div>
        
          
          ))
      }
      </div>

    :
    <div className='landing_container'>
      {
        state.map((e)=>(
          
            <div className='landing_wrapper'  onClick={()=>setId(e.id)} key={e.id}>
           
            <img src={e.largeImageURL} />
            
          <div className='stats'>
            <div className='likes'>Likes: {e.likes}</div>
            <div className='author'>Author: {e.user}</div>
            <div className='views'>Views: {e.views}</div>
          </div>

          
          </div>
        
          
          
        ))
      }

<button className='loadmore' onClick={handleClick}>LOAD MORE</button>

    </div>
  )

}

export default Landing