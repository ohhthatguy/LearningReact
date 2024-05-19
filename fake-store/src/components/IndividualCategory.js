import React from 'react'



const IndividualCategory = ({category, state}) => {

  return (
    <div>
        {
            Object.values(state).map((e)=>(
                (e.category == category)
                &&
                <div>
                    <img src={e.image}></img>
                    <div>{e.category}</div>
                    <div>{e.title}</div>
                    <div>{e.price}</div>


                </div>

            ))
        }
    </div>
  )
}

export default IndividualCategory