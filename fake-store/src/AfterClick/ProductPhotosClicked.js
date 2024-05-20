import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import './ProductPhotosClicked.css'

const ProductPhotosClicked = () => {
    const {state} = useContext(GlobalContext)
    let {id} = useParams()
    id=parseInt(id)
    
  return (
    <div className='productphotoclicked_container'>
        <img src={state[id-1].image}></img>
    </div>
  )
}

export default ProductPhotosClicked