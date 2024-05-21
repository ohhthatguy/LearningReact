import React,{useContext, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import { Link } from 'react-router-dom'
import Counter from './Counter'
import './AfterClick.css'
import Accordion from './Accordion'
import ProductPhotos from './ProductPhotos'
import RelatedProduct from './RelatedProduct'

const AfterClick = () => {
    
    const topElement = useRef()

    const {state} = useContext(GlobalContext)
    let {id} = useParams()
    id = parseInt(id)
    
    useEffect(()=>{
        window.scrollTo({top: topElement.current.offsetTop, behavior: "smooth" })
      
    },[id])
  
        // console.log(id)

  return (<div ref={topElement} className='AfterClick_container'>

            <div className='AfterClick_content'>

                <div className='AfterClick_content1'>
                 
                    {
                        Object.values(state).map((e)=>(
                            
                            (e.id == id)
                                &&
                            <ProductPhotos id={id} productDetail={e}/>

                        ))
                    }
                   
                </div>

                <div className='AfterClick_content2'>
                    {
                        Object.values(state).map((e)=>(

                            (e.id==id) 
                                &&
                            <div className='AfterClick_content2_details_wrapper'>

                                <div className='AfterClick_content2_details'>
                                    <div className='AfterClick_content2_details_buttons'>

                                    <Link to={`/product/${id-1}`}>
                                    <button disabled={(id <=1 ? true : false)}>prev</button>
                                    </Link>

                                    <Link to={`/product/${id+1}`}>
                                    <button disabled={(id >19 ? true : false)}>next</button>
                                    </Link>
                                      
                                    </div>
                                    <div>{e.category}</div>
                                    <div>{e.title}</div>
                                    <div>${e.price} <span>&free shipping!!</span></div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.</div>
                                </div>

                                <Counter id={id}/>

                                <Accordion />

                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='AfterClick_content_related_product'>
                
                <RelatedProduct state={state} id={id}/>

            </div>


            


    </div>)
}

export default AfterClick