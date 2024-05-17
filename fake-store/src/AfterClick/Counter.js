import React,{useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleAddToCart(){

    }

  return (
    <div className='counter_container'>

        <div className='counter'>
            <button onClick={()=> count>0 && setCount(prev=>prev-1) } >-</button>
            <span>{count}</span>
            <button  onClick={()=> count<20 && setCount(prev=>prev+1) }>+</button>
        </div>

        <button onClick={handleAddToCart}>ADD TO CART</button>

    </div>
  )
}

export default Counter