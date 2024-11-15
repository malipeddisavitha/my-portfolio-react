import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src="https://img.freepik.com/premium-photo/3d-rendered-photos-hard-working-women_1096167-16248.jpg?ga=GA1.1.1768261497.1722018015&semt=ais_hybrid" alt="" className='profile-img' />
      <h1><span>I'm Malipeddi Savitha, Mern Stack Developer</span> </h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero