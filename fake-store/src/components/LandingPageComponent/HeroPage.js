import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/Global'


const HeroPage = () => {
    const {state} = useContext(GlobalContext)
  
    let randomNum = Math.floor(Math.random()* Object.keys(state).length)
    console.log(randomNum)
  return (
    <div>
        {
      (Object.keys(state).length) &&

          <div className='Homepage_container'>

              <div className='Herosection'>

                <div className='Herosection_details'>

                  <div>{state[randomNum].category}</div>
                  <div>Slick. Modern.</div>
                  <div>Awesome</div>
                  
                  <Link to={`/product/${state[randomNum].category}`}>
                    <button>shop collection</button>
                  </Link>
                </div>

              
                  <img className='Herosection_img' src={state[randomNum].image} key={state.id} />
               


              </div>

          </div>
    }
    </div>
  )
}

export default HeroPage