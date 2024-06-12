import React from 'react'
import './Aboutus.css'
import abu from '../assets/abu.jpg'
import abu2 from '../assets/abu2.jpg'
const About = () => {
  return (
    <div className='abu'>
      <div className='abu'>
        <img className='abu1' src={abu} alt="abu" />

      </div>
      <div className='abu2'>
        <img className='abu2' src={abu2} alt="abu2"/>
        <p className='name'>i am abu-huraira</p>

      </div>

    </div>
  )
}

export default About
