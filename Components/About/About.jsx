import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src="https://img.freepik.com/premium-photo/vector-international-internet-day_994245-21700.jpg?w=826" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>ello! I'm Savitha Malipeddi, a passionate and driven Full Stack Developer with a keen eye for detail and a commitment to creating seamless user experiences. With a background in both front-end and back-end development, I specialize in building responsive and efficient web applications from concept to deployment. My goal is to bridge design and technology, bringing ideas to life with clean code and creative problem-solving.</p>
                <p>I am proficient in technologies such as HTML, CSS, JavaScript, React, Node.js, and Python, along with frameworks and tools that support agile and scalable development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Programming Skills</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Full Stack Development Skills</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>FrontEnd Skills</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>BackEnd Skills</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      </div>

  )
}

export default About
