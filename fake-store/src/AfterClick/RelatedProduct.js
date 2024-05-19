import React from 'react'
import Card from '../components/Card'

const RelatedProduct = ({state,id}) => {
    let count=0;
    // console.log(state[id].category)

  return (
    <div className='Popularsection_container'>

        <header className='RelatedProduct_title'>
            RELATED PRODUCTS
        </header>

        <div className='Popularsection_showcards'>
           
        {
            
            Object.values(state).map((value)=>{

                if( count<=3 && value.category == state[id].category ){
                     if(count > 3){
                        count = 0
                     }else{
                        count++
                     }
                    
                    return  <Card product={value}/>
                }

                

            })
        }
        </div>


    </div>
  )
}

export default RelatedProduct