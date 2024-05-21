import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/Global';

import './Counter.css'

const Counter = ({id}) => {
    const {CheckoutData,state,setCartCounter} = useContext(GlobalContext) 
    const [count, setCount] = useState(0);
  
    console.log(id)

    function handleAddToCart(){
      
      CheckoutData(id,count,state[id].price)
      setCartCounter(count)

    }

  return (
    <div className='counter_container'>

        <div className='counter'>
            <button onClick={()=> count>0 && setCount(prev=>prev-1) } >-</button>
            <div>{count}</div>
            <button onClick={()=> count<20 && setCount(prev=>prev+1) }>+</button>
        </div>

        <button onClick={handleAddToCart} disabled={(count==0)?true:false} >ADD TO CART</button>

    </div>
  )
}

export default Counter