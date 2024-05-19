import React,{useContext} from 'react'
import IndividualCategory from '../IndividualCategory'
import { GlobalContext } from '../../context/Global'

const Electronics = () => {
  const {state} = useContext(GlobalContext)
  
  return (
    <div>

      <header>electornics</header>

      <IndividualCategory category = {'electronics'} state={state}/>


    </div>
  )
}

export default Electronics