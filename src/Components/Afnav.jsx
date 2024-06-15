import React from 'react'
import './Afnav.css'
import bg from '../assets/hero.png'
const Afnav = () => {
  return (
    <div className='Afnav'>
      <div className='Afnav-text'>
        <img className='bgimg' src= {bg} alt="bg" />
        <p className='bgtext'>our team</p>
      </div>
    </div>
  )
}

export default Afnav
