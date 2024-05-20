import React,{useContext, useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import Counter from './Counter'
import './AfterClick.css'
import Accordion from './Accordion'
import ProductPhotos from './ProductPhotos'
import RelatedProduct from './RelatedProduct'

const AfterClick = () => {
    
    const topElement = useRef()

    const {state} = useContext(GlobalContext)
    const {id} = useParams()
    
    const [updatedID, setUpdatedID] = useState(parseInt(id))
    useEffect(()=>{
        window.scrollTo({top: topElement.current.offsetTop, behavior: "smooth" })
        setUpdatedID(parseInt(id))
    },[id])
  

  return (<div ref={topElement} className='AfterClick_container'>

            <div className='AfterClick_content'>

                <div className='AfterClick_content1'>
                 
                    {
                        Object.values(state).map((e)=>(
                            
                            (e.id == updatedID)
                                &&
                            <ProductPhotos id={updatedID} productDetail={e}/>

                        ))
                    }
                   
                </div>

                <div className='AfterClick_content2'>
                    {
                        Object.values(state).map((e)=>(

                            (e.id==updatedID) 
                                &&
                            <div className='AfterClick_content2_details_wrapper'>

                                <div className='AfterClick_content2_details'>
                                    <div className='AfterClick_content2_details_buttons'>
                                        <button disabled={(updatedID <=1 ? true : false)} onClick={()=> (setUpdatedID(data=> data-1) )}>prev</button>
                                        <button disabled={(updatedID >19 ? true : false)} onClick={()=> ( setUpdatedID(data=> data+1))}>next</button>

                                    </div>
                                    <div>{e.category}</div>
                                    <div>{e.title}</div>
                                    <div>${e.price} <span>&free shipping!!</span></div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.</div>
                                </div>

                                <Counter />

                                <Accordion />

                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='AfterClick_content_related_product'>
                

                <RelatedProduct state={state} id={updatedID-1}/>

            </div>


            


    </div>)
}

export default AfterClick