import React from 'react'
import './ProductPhotos.css'

const ProductPhotos = ({id, productDetail}) => {
    // console.log(productDetail)
  return (
    <div className='productphotos_container'>
        <img className='product_photo' src={productDetail.image} />
    
    </div>
  )
}

export default ProductPhotos