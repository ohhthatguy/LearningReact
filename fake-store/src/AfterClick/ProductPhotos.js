import React from 'react'
import './ProductPhotos.css'
import { Link } from 'react-router-dom'

const ProductPhotos = ({id, productDetail}) => {
  
  return (
    <div className='productphotos_container'>
      <Link to={`/image/product/${productDetail.category}/${productDetail.id}`}>
        <img className='product_photo' src={productDetail.image} />
      </Link>
    
    </div>
  )
}

export default ProductPhotos