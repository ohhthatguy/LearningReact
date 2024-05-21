import React,{useContext, useRef} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import { MdAddShoppingCart } from "react-icons/md";


const Navbar = () => {

    const {category, cartCounter} = useContext(GlobalContext)

    const cartEle = useRef()

    function handleClick(){
       cartEle.current.className = 'hideDot'
    }

    (cartCounter > 0  && (cartEle.current.className = 'dot'))
    

  return (
    <div className='NavBar_Container'>

<div className='NavBar_detail'>
            {/* <div>Home</div> */}
            <Link className='home' to='/'>Home</Link>

            <div className='Navbar_product'>Product
                <ul className='Navbar_product_ul'>
                    {
                    Object.values(category).map((e,index)=>(
                        <Link key={index} className='Navbar_product_li' to={`/product/${e}`}>{e}</Link>
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
        
        <Link to='/checkout'>
             <MdAddShoppingCart onClick={handleClick} className='cart'/>
        </Link>
        
            <div ref={cartEle} className='hideDot' >
                {cartCounter}
            </div>

        </div>
       

    </div>
  )
}

export default Navbar