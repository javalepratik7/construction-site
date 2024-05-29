import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
import logo from './logo.jpg'


function Navbar() {
  return (
    <div>
      <div className='cent 'style={{fontSize:'40px',fontWeight:"bold",paddingTop:'5px', backgroundColor:'#212121',color:'white',position:'sticky'}}>
        {/* <img src={logo} alt="" srcset="" style={{height:'95px',borderRadius:'50%',marginRight:'15px'}}/> */}
      <span style={{backgroundColor:'#212121',color:'white' ,padding:'9px',position:'sticky'}}>  Shree Balaji Construction Pvt. Lid.</span> 
      </div>
      <div className="navbar" style={{position:'sticky'}}>
        <ul className='nav '>
            <li> <NavLink className='navLink' to="/" ><button className='butt'>Home</button></NavLink></li>
            <li> <NavLink className='navLink' to="/about" ><button className='butt'>About us</button></NavLink></li>
            <li> <NavLink className='navLink' to="/services" ><button className='butt'>Services</button></NavLink></li>
            <li> <NavLink className='navLink' to="/projects" ><button className='butt'>Our Projects</button></NavLink></li>
            <li> <NavLink className='navLink' to="/clients" ><button className='butt'>Our Clients</button></NavLink></li>
            <li> <NavLink className='navLink' to="/contact" ><button className='butt'>Contact Us</button></NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
