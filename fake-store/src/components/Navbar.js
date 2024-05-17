import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/Global'

const Navbar = () => {

    const {category} = useContext(GlobalContext)
    console.log(category)

  return (
    <div className='NavBar_Container'>

<div className='NavBar_detail'>
            <div>Home</div>

            <div className='Navbar_product'>Product
                <ul className='Navbar_product_ul'>
                    {
                    Object.values(category).map((e)=>(
                        <Link className='Navbar_product_li' to={`/product/${e}`}>{e}</Link>
                    ))
                    }
                </ul>
            </div>
            
            <div>About</div>
        </div>

       

        <div className='NavBar_title_logo'>
            <img width="119" height="54" src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="T-Shirts Store" decoding="async" srcSet="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png 1x, https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-retina.png 2x" />
        </div>

        <div className='NavBar_category'>
         
        </div>
       

    </div>
  )
}

export default Navbar