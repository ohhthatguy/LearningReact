import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/Global';
import { useParams } from 'react-router-dom';
import './Counter.css'

const Counter = () => {
    const {CheckoutData,state} = useContext(GlobalContext) 
    const [count, setCount] = useState(0);
    const {id} = useParams()
    

    function handleAddToCart(){
      CheckoutData(id,count,state[id-1].price)

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