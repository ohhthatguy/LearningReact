import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar_container.css'
import search_icon from './search_icon.png'

let tempSearchedData;

const Navbar_container = (props) => {

    // function handlesearch(e){
    //   console.log(e.target.value);
    // }

    // props.getSearchData();

    function tempStoreSearchedData(e){
        tempSearchedData = e.target.value;
    }

  return (
    <div className='Navbar_container'>

        <div className='logo'>Logo</div>

        <div className='Navbar_options_container'>
            <Link className='Navbar_options' to='/'>Home</Link>
            <Link className='Navbar_options'  to='/List'>List</Link>
            <Link className='Navbar_options'  to='/Browse'>Browse</Link>
            <Link className='Navbar_options'  to='/Contact'>Contact</Link>

        </div>


        <div className='Navbar_search_container'>
          
       
            <input type='text' className='Navbar_search' onKeyUp={props.getSearchData}  placeholder='Search'></input>

            <Link to='/Search'>
            <button>Search</button>
            </Link>
            {/* <img className='Navbar_search_icon' src={search_icon} alt='search icon'></img> */}
        
            
        </div>
        

    </div>
  )
}

export default Navbar_container