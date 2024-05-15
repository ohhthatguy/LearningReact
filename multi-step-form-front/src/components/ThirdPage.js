import React, {useContext} from 'react'
import { GlobalContext } from '../context/Globalcontext'
import './ThirdPage.css'

const ThirdPage = () => {
  const {setCount, state} = useContext(GlobalContext)
  // console.log(state)

  return (
    <div className='Form_container'>

      <header>THis is a third header</header>

      <div className='confirmationPage_wrapper'>
       
        {

          Object.entries(state).map(([key, value])=>(
            <div className='userDetail_div'>
              {key}
              <div>{value}</div>
            </div> 
          ))
        }

<div className='btn_wrapper'>
        <button className='backBtn' onClick={()=>setCount(prev=>prev-1)} >Back</button>
        <button className='contBtn1' onClick={()=>setCount(prev=>prev+1)}>Continue</button>

    </div>

      </div>

      


    </div>
  )
}

export default ThirdPage