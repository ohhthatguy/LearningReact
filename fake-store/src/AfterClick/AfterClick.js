import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import Counter from './Counter'
import './AfterClick.css'

const AfterClick = () => {
    const {state} = useContext(GlobalContext)
    const {id} = useParams();

  return (<div className='AfterClick_container'>

            <div className='AfterClick_content'>

                <div className='AfterClick_content1'>
                    huhuh
                </div>

                <div className='AfterClick_content2'>
                    {
                        Object.values(state).map((e)=>(

                            (e.id==id) 
                                &&
                            <div className='AfterClick_content2_details_wrapper'>

                                <div className='AfterClick_content2_details'>
                                    <div>{e.category}</div>
                                    <div>{e.title}</div>
                                    <div>${e.price} <span>&free shipping!!</span></div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.</div>
                                </div>

                                <Counter />
                            </div>
                        ))
                    }
                </div>

            </div>
            


    </div>)
}

export default AfterClick