import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Where Service meets Excellence...</h1>
        <p>Partner with IEM Consultancy Services to harness the power of IT, Engineering and Management Solutions. Drive innovation and operational excellence with our tailored, expert solutions.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
