import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        {/*
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
        */}
        <h2>Vission</h2>
        <p>To achieve global recognition as a leader in innovation and service excellence</p>
        <h2>Mission</h2>
        <p>Our mission is to serve as trusted partners, enhancing our clients' business process efficiency. We will achieve this by fostering a culture of innovation, utilizing a balanced mix of industry and academia experience, and adhering to a superior governance framework.</p>
        <h2>Value Proposition</h2>
        <p>We drive innovation to deliver cutting-edge solutions, with a sharp focus on client value. Guided by integrity, we uphold transparency in every business operation.
        </p>
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <br></br>
        <p>IEM Consultancy Services (IEMCS) is a dynamic and innovative organization that specializes in IT Products & Services, Engineering Solutions, and Management Solutions. Evolving from the prestigious Institute of Engineering and Management (IEM), we are uniquely positioned to bridge the gap between academia and industry, delivering cutting-edge solutions to meet the diverse needs of businesses and organizations.</p>
        <p>Our strength lies in our stakeholders, who include senior faculty members, PhD scholars, researchers, seasoned industry consultants, and talented students from both engineering and management disciplines. Together, we foster a collaborative environment that drives research, development, and the practical implementation of innovative technologies.</p>
        <p>At IEMCS, we are committed to empowering our clients by providing advanced solutions that encompass digital transformation, engineering excellence, and strategic management. Our focus on continuous learning, research, and industry collaboration ensures that we remain at the forefront of technological and business advancements, helping organizations achieve their goals and thrive in a competitive landscape.</p>

      </div>
    </div>
  )
}

export default About



