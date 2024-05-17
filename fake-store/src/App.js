import React from 'react'
import {GlobalProvider} from './context/Global'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/LandingPageComponent/Homepage'
import Electronics from './components/electronic_section/Electronics'
import Jewelery from './components/Jewelery_section/Jewelery'
import Mens_clothing from './components/mens_clothing_section/Mens_clothing'
import Womens_clothing from './components/womens_clothing_section/Womens_clothing'
import AfterClick from './AfterClick/AfterClick'



const App = () => {
  return (<GlobalProvider>

   <Navbar />

    <Routes>

      <Route path='/' element={<Homepage />} />
      <Route path='/product/:id' element={<AfterClick />} />
      <Route path='/product/electronics' element={<Electronics />} />
      <Route path='/product/jewelery' element={<Jewelery />} />
      <Route path="/product/men's clothing" element={<Mens_clothing />} />
      <Route path="/product/women's clothing" element={<Womens_clothing />} />


    </Routes>

    
   
    

    </GlobalProvider>)
}

export default App