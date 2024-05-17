import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {

    


  return (<Link to={`/product/${props.product.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>

      <div className='Cards_container'>

          <img src={props.product.image} alt={props.product.category} />
          
          <div className='Cards_details'>
            <div>{props.product.category}</div>
            <div>{props.product.title}</div>
            <div>${props.product.price}</div>
          </div>


      </div>

    </Link>)
}

export default Card