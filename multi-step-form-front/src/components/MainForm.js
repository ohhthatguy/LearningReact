import React, {useContext} from 'react'
import { GlobalContext } from '../context/Globalcontext'

import './MainForm.css'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'

const MainForm = () => {

    const {count} = useContext(GlobalContext)

  return (
    <div>
        {(count == 1) && <FirstPage />}
        {(count == 2) && <SecondPage />}
        {(count == 3) && <ThirdPage />}
        {(count == 4) && <FourthPage />}

    </div>

  )

}

export default MainForm