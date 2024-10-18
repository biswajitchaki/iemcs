import React from 'react'
import './CaseStudy.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const CaseStudy = ({ setPlayState }) => {
    return (
        <div>
        <div className='CaseStudy'>
            <div className="CaseStudy-left">
 
                {/*}
                <img src={about_img} alt="" className='CaseStudy-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
                */}
                <h2>Financial Accounting Product Company</h2>
                <h3>Problem Statement</h3>
                <p>The software users often receive invoices, bills, and financial documents in image or PDF formats, which need to be manually entered into the system. To streamline this process, OCR (Optical Character Recognition) technology is used to extract text from these documents. However, after parsing, the data accuracy is typically around 80% due to OCR limitations, such as formatting issues, low-quality images, or variations in fonts. This leads to significant manual effort for correction, increasing the risk of errors and operational inefficiencies.</p>
                <h3>Solution</h3>
                <p>By integrating Generative AI with Tally, the extracted data accuracy can be elevated to 100%. The process involves the following:
                    Text is automatically extracted from images or PDFs using OCR technology.
                    The Generative AI model is trained to understand financial terminologies and document structures, which enables it to predict and correct errors in the OCR-parsed data. The corrected data is then automatically entered into the system, reducing the need for manual intervention and ensuring error-free entries.</p>
             
            </div>
            <div className="CaseStudy-right">
           
                <h2>An Engineering Company </h2>
                <h3>Problem Statement</h3>
                <p>The client is an engineering service provider, aims to implement a Bridge Data Analytics System to ensure the safety and structural integrity of bridges. The challenge arises from monitoring various environmental and structural parameters such as vibrations, stress, temperature, humidity, and load through a network of IoT sensors installed on and around the bridge. These sensors continuously collect real-time data. However, the system lacks the capability to analyze this vast amount of data efficiently and issue timely alerts when the data exceeds predefined threshold limits </p>
                <h3>Solution</h3>
                <p>Deploy a network of advanced IoT sensors on the bridge to continuously monitor critical parameters such as vibrations, displacement, stress, and environmental conditions. These sensors will feed real-time data into the central analytics system.
                    System will trigger automated alerts when any parameter exceeds its threshold. Alerts can be sent through SMS, email, or in-app notifications, ensuring that engineers and stakeholders are informed immediately about critical situations.
                    Predictive analytics will analyze historical data and predict potential failures or maintenance requirements. This will help plan proactive maintenance activities, preventing costly repairs and downtime </p>
                     
            </div>
        </div>
        <div style={{ textAlign: 'center', }}>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>  
        </div>
    </div>
    )

}


export default CaseStudy



