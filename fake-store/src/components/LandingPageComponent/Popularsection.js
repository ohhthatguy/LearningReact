import React, {useContext} from 'react'
import { GlobalContext } from '../../context/Global'
import Card from '../Card'



const Popularsection = () => {

    const {state} = useContext(GlobalContext)


  return (
    <div className='Popularsection_container'>

        <header className='Popularsection_title'>
            <div>summer collection</div>
            <div>Popular</div>
        </header>

        <div className='Popularsection_showcards'>
           
        {
            Object.values(state).map((value,index)=>{

                if(index < 4){
                    return  <Card product={value}/>
                }

            })
        }
        </div>


    </div>
  )
}

export default Popularsection