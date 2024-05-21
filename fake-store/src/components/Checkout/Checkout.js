import React, {useContext} from 'react'
import './Checkout.css'
import { GlobalContext } from '../../context/Global'
import { Link } from 'react-router-dom'
import { TiDelete } from "react-icons/ti";

const Checkout = () => {
  const {cart,state,deletCheckoutData} = useContext(GlobalContext)
  let total=0;
  Object.values(cart).map((e)=>{
    total += ( (e.quantity) * (state[e.productId-1].price))
  })

  console.log(cart)
  console.log(state)
 
  return (
    <div className='Checkout_container'>

    
    {
      cart.map((e)=>(

        <div key={e.productId} className='Checkout_wrapper'>
          <TiDelete onClick={()=>deletCheckoutData((parseInt(e.productId)), e.quantity, state[e.productId].price )} className='delete_item'/>
        
        <div className='chekout_img_wrapper'>
          <Link to={`/product/${e.productId}`} >
        <img src={state[e.productId - 1].image} className='checkout_img' />
        </Link>
        </div>
       
        <div className='checkout_content_wrapper'> 
        <Link to={`/product/${e.productId}`} >
          <div className='checkout_title'>{state[e.productId-1].title}</div>
        </Link>
          <div className='checkout_category'>{state[e.productId-1].category}</div>
          <div className='checkout_desc'>{state[e.productId-1].description}</div>

          <div className='price_and_quantity'>
            <div className='price'>${state[e.productId-1].price}</div>
            <div className='quantity'>Qty:{e.quantity}</div>
          </div>

          <div className='Total_individual'>this item total: ${(e.quantity) * (state[e.productId-1].price)} </div>
        </div>


      </div>
      ))

     

  }

    <div className='Final_total'>
      <div className='final_price'>Grand Total: $
        {
          total
        }

      </div>

      <div className='checkout_btn_wrapper'>

      <Link to='/'>
      <button className='checkout' >CHECKOUT</button>
      </Link>
      <button className='shopmore'>SHOP MORE</button>
      </div>
    </div>


    </div>
  )
}

export default Checkout