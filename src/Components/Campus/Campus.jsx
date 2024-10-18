import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/service-off-1.png'
import gallery_2 from '../../assets/service-off-2.png'
import gallery_3 from '../../assets/service-off-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div>
        <div>
          <h2>IT Products & Services landscape</h2>
          <p><br/>IEMCS offers comprehensive suite of IT Products & Services designed to drive innovation and efficiency across organizations. Our solutions leverage the latest technologies to meet the evolving needs of businesses in today’s digital landscape.<br/></p>
        </div>
        <div className="gallery">
          <img src={gallery_1} alt="" />
        </div>
      </div>

      <div>
        <div>
          <h2>Engineering Solutions landscape</h2>
          <p><br/>We deliver comprehensive engineering solutions designed to optimize operations, improve efficiency, and drive innovation across industries.<br/> </p>
        </div>
        <div className="gallery">
          <img src={gallery_2} alt="" />
        </div>
      </div>

      <div>
        <div>
          <h2>Management Solutions landscape </h2>
          <p><br/>Our Management Consultant services are designed to help organizations navigate complex business challenges and drive sustainable growth. <br/>
          </p>
        </div>
        <div className="gallery">
          <img src={gallery_3} alt="" />
        </div>
      </div>

     {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}
    </div>
  )
}

export default Campus
