import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './IndividualCategory.css'
import { GlobalContext } from '../context/Global'



const IndividualCategory = ({category}) => {

  const {state} = useContext(GlobalContext)
  // const counter = useRef(0)



  return (<div className='outerContainer'>
          <header>{category}</header>
          {/* <div>got {counter.current} results </div> */}
  
     
    <div className='individual_category_container'>

        {
            Object.values(state).map((e)=>(
                (e.category == category)
                &&
               
                <div className='individual_category_wrapper'>
                <Link to={`/product/${e.id}`}>
                    <img src={e.image}></img>
                    </Link>
                  
                    <div>{e.category}</div>
                    <div>{e.title}</div>
                    <div>${e.price}</div>
                </div>
              
            ))
            
        }

   
           
      </div>
    </div>)
}

export default IndividualCategory