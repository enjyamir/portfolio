import React, { Component } from 'react';
import './Nav.css'
import logo from '../imgs/logo.png'
import {Link } from 'react-router-dom';
const Nav = () => {
    return ( 
        <>
      <header>
        <div className='navbar'>
        <img src ={logo} alt='logo' className='logonav' />

<ul className='ullist'>

      <Link to = "/Home" > <li> Home</li></Link>  
     <Link to = "/About" > <li>About</li></Link>
        <li>Projects </li>
        <li>Contact </li>
        <li>Blog</li>


   


</ul>
 </div>
        </header>
        </>
     );
}
 
export default Nav;