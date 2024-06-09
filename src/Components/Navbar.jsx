import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Pdf</li>
        <li>Blog</li>
        <li>About us</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
