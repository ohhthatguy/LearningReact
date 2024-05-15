import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/Globalcontext'
import './SecondPage.css'

const SecondPage = () => {

    const {setCount, loadSecondPage, secondPageData, setSecondPageData} = useContext(GlobalContext)

    function handleClick(){
        // console.log(secondPageData)
       
        loadSecondPage(secondPageData)
        setCount(prev=>prev+1)
    }



  return (
    <div className='Form_container'>

    <header>
        this is second header
    </header>
        

    <form onSubmit={handleClick} className='Form_wrapper'>

        <div className='firstInput'>Occupation
        <input type='text' minLength='3' maxLength='20'  value={secondPageData.occupation} onChange={(e)=>{setSecondPageData({...secondPageData, occupation:e.target.value })}} placeholder='enter Occupation' />
        </div>

        <div className='secondInput'>City
        <input type='text' minLength='3' maxLength='20' value={secondPageData.city} onChange={(e)=>{setSecondPageData({...secondPageData, city:e.target.value })}} placeholder='enter City' />
        </div>

        <div className='thirdInput'>Bio
        <input type='text' minLength='3' maxLength='20' value={secondPageData.bio} onChange={(e)=>{setSecondPageData({...secondPageData, bio:e.target.value })}} placeholder='enter Bio' />
        </div>

                <div className='btn_wrapper'>
                <button className='backBtn' onClick={()=>setCount(prev=>prev-1)} >Back</button>

                {
                    (secondPageData.occupation && secondPageData.city && secondPageData.bio ) ?
                    <button className='contBtn1' type='submit'>Continue</button> :
                    // onClick={handleClick}
                    <button className='contBtn' disabled>Continue</button> 
                }
                

            </div>

    </form>

   


    </div>
  )
}

export default SecondPage