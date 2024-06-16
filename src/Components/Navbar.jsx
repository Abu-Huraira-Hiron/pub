import React from 'react'
import{Link} from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
     <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li> <Link href="/PDF" >Pdf</Link></li>
        <li> <Link href="/Blog">Blog</Link></li>
        <li><Link href="/About us">About us </Link></li>
        <li><Link href="/Contact us"><button className='btn'>Contact us</button></Link></li>

      </ul>
    </nav>
  )
}

export default Navbar

