import React from 'react'
import './Programs.css'
import program_1 from '../../assets/service-1.png'
import program_2 from '../../assets/service-2.png'
import program_3 from '../../assets/service-3.png'
import program_icon_1 from '../../assets/service-icon-1.png'
import program_icon_2 from '../../assets/service-icon-2.png'
import program_icon_3 from '../../assets/service-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          {/* <p style={{ fontWeight: 'bold' }} > IT Products & Services </p> */}
          <p style={{ textAlign: 'justify', margin: 20 }}> IEMCS offers comprehensive suite of IT Products & Services designed to drive innovation and efficiency across organizations. Our solutions leverage the latest technologies to meet the evolving needs of businesses in today’s digital landscape. </p>
        </div>
        <br/>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }} > IT Products & Services </p>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          {/* <p style={{ fontWeight: 'bold' }}> Engineering Solutions</p> */}
          <p style={{ textAlign: 'justify', margin: 20 }}> IEMCS offers Engineering Solutions encompassing a wide range of services designed to address the complex challenges faced by various industries. We leverage cutting-edge technologies and engineering principles to develop innovative solutions that enhance efficiency, optimize performance, and drive sustainability.
          </p>
        </div>
        <br/>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }} > Engineering Solutions </p>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          {/* <p style={{ fontWeight: 'bold' }}>Management Solutions</p> */}
          <p style={{ textAlign: 'justify', margin: 20 }}> IEMCS offers Management Solutions which are designed to optimize organizational processes and drive efficiency. We leverage best practices, rich industry experience and expertise, and innovative methodologies to help businesses navigate challenges and seize opportunities in an ever-evolving landscape.
          </p>
        </div>
        <br/>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }} > Management Solutions </p>
      </div>
    </div>
  )
}

export default Programs
