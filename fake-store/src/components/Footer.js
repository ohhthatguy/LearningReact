import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/Global'
import { CiInstagram } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import './Footer.css'

const Footer = () => {
    const {category} = useContext(GlobalContext)
  return (<div>
    <div className='Footer_container'>
        <div>Lost are ya? navigate accordingly...</div>
      
        <div className='Footer_category'>

            <Link className='footer_link' to='/'>Home</Link>

            {
                Object.values(category).map((e,index)=>(
                    <Link key={index} className='footer_link' to={`/product/${e}`}>{e}</Link>
                ))
            }

        </div>

        <div className='connected'>like my work?? let's get connected

            <div>
            <Link to='https://www.instagram.com/bus_karr/'>
           <CiInstagram className='icon'/>  
           </Link>  
{/* 
           <Link to='https://www.instagram.com/bus_karr/'>
            <FaInstagramSquare className='icon'/>  
            </Link> */}

            <Link to='https://github.com/ohhthatguy'>
            <FaGithub className='icon' /> 
            </Link>

            {/* <Link to='https://github.com/ohhthatguy'>
            <VscGithub className='icon'/>  
            </Link> */}

            </div>

        </div>

       

    </div>
    <div className='last_footer'>made with <FcLike />  by Bhaskar Thakulla</div>
    </div>)
}

export default Footer