import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-5.png'
import user_6 from '../../assets/user-6.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Prof. Satyajit (Alex) Chakraborti</h3>
                            <h4>CEO, Founder</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Prof. Satyajit Chakrabarti, is a Professor, Technologist, Serial Entrepreneur and Venture Capitalist. He obtained his PhD in Nanotechnology from the National Institute of Technology and Masters in Computer Science from the University of British Columbia. Prof. Chakrabarti manages companies in the field of Technology, Healthcare and Education. He is an avid philanthropist and social Entrepreneur and runs nonprofits and two educational Universities and five colleges in India in the fields of Engineering, Management, Hospitality, Law, Healthcare with over 10,000 students and over 100,000 alumni. His Technology companies work with big multinational companies to deliver products and services in the fields of Artificial Intelligence, Internet of Things, Virtual and Augmented Reality, Cybersecurity and Web Development. Prof. Chakrabarti is a passionate researcher with over 100 publications in the fields of Artificial Intelligence, IOT and Data Science and over 20 patents filed in various fields of Technology. Prof. Chakrabarti is an avid investor in early-stage startups and a mentor and teacher to thousands of students across the globe. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Dr. Amit Kumar Das</h3>
                            <h4>CTO</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Dr. Amit Kumar Das has been working in the IT industry and in academic research / teaching in the area of Data Science for the past 25 years. He is currently working as Professor and Dean (Industry Consultancy) at the Institute of Engineering & Management. Amit has done Ph.D. at University of Calcutta in the area of Machine Learning and M. Tech. from Birla Institute of Technology & Science, Pilani. Before that, he did graduation in Electrical Engineering from Bengal Engineering College, Shibpur (currently known as IIEST). </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Biswajit Chaki</h3>
                            <h4>Head of Engineering Solutions</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Biswajit is an experienced IT professional with over 35 years in leading IT and ICT organizations, including Ericsson India, and Tech Mahindra. He has held senior leadership roles, specializing in guiding global Communication Service Providers (CSPs) worldwide managing end-to-end transformation projects. He has done Masters in Computer Science and Master in Business Administration.  </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Saikat Dutt</h3>
                            <h4>Head of IT Products & Services</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Professor of Practice, Institute of Engineering and Management, Visiting Faculty, IIM, Calcutta.
With over 26 years of experience in IT industry, Saikat is a seasoned expert specializing in modern program management, machine learning, Gen AI and Supply Chain. He has led many mission critical projects across various industries, driving innovation and delivering results through cutting-edge technologies like ERP, Robotic Process Automation, Machine Learning, Generative AI, etc. He has also published four books with Pearson on machine learning and modern project management.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_5} alt="" />
                        <div>
                            <h3>Dr. Subhabrata Banerjee</h3>
                            <h4>Head of R&D</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Dr. Subhabrata Banerjee is a seasoned academician and researcher and is now working as Professor and Coordinator of Innovation Entrepreneurship Development Centre (IEDC) at the Institute of Engineering & Management, Kolkata. With over 15 years of teaching experience and expertise in Evolutionary Algorithm, IoT and Error Control Coding, he has published extensively in international journals and conferences, including Springer, Wiley, and IET (UK). A senior member of IEEE and Robotics and Automation Society, Dr. Banerjee has authored books and book chapters on cutting-edge technology.</p>
                </div>
            </li> 
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_6} alt="" />
                        <div>
                            <h3>Chirabrata Majumder</h3>
                            <h4>Head of Management Solutions</h4>
                        </div>
                    </div>
                    <p style={{ textAlign: 'justify', }}>Professor of Practice in Department of Management at IEM Kolkata. A seasoned Industry professional in the field of business management and human resources, with a strong focus on Consulting in the areas of Leadership development, HR strategy, Organization Behaviour, Organization Change and Development. <br/>
He has been instrumental in crafting MBA-level study materials and course curriculums, specializing in areas like Job Analysis, Competency Mapping, Organization Behaviour and Leadership Coaching.
Chirabrata is having 25 years of Industry experience and also passionate about education, actively contributing to the development of learning ecosystems and professional training.</p>
                </div>
            </li>        
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
