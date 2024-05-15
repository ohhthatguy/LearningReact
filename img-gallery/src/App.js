import React  from 'react'
// import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Landing from './components/Landing'



import {GlobalProvider} from './context/GlobalContext'


const App = () => {

  return (
  <GlobalProvider>

    <Header />
    <Landing />
        
  </GlobalProvider>
     )
}

export default App