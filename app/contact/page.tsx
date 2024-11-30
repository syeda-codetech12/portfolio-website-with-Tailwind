import React from 'react'

import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";


import '../../app/styles/contact.css'



const contact = () => {
  return (
    <div className='main-contact-container'>
        <div className='contact-text-container'>
            <h1 className='purple-heading'>LET'S</h1>
            <h1 className='grey-heading'>CONNECT!</h1> 
        </div>
        <div className='contact-container'>
            <div className='contact-text'>
                <h3 className='contact-heading'  data-aos="zoom-in-up">DON'T BE SHY!</h3>
                <p className='contact-des' data-aos="zoom-in-up" data-aos-duration="1000">Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to bring your vision to life.</p>

               <div data-aos="zoom-in-up" data-aos-duration="1500">
               <div> 
                <div className='contact-details'>
            <IoMailUnreadOutline className='contact-icon' size={28}/>   
            <p className='request'>MAIL ME AT:</p>
            </div>
                <p className='contact-info'>sbs86.freelancer@gmail.com</p>
                </div>

<br />
                <div>
                <div  className='contact-details'>
                    <FaPhoneVolume className='contact-icon' size={25}/>
                    <p className='request'>CALL ME AT:</p>
                    </div>
                <p className='contact-info'>+92 345 9996615 </p>
                </div>
                </div>
                <div className='links-sec'>
                   <a href="https://www.linkedin.com/in/syeda-barha-b800412b7/" target="_blank"><div><CiLinkedin size={32} /></div></a> 
                    <a href="https://www.facebook.com" target="_blank"><div><CiFacebook size={32}/></div></a>
                    <a href="https://www.github.com/syeda-codetech12" target="_blank"><div><FaSquareGithub size={30}/></div></a>
                </div>
            </div>
            <div>
                <input type="text" name='name' placeholder='Name' className='input' />
                <input type="text" name='email' placeholder='Email' className='input' />
                <input type="text" name='subject' placeholder='Subject' className='input' />
                <textarea  name='message' placeholder='Message' rows={5} cols={4} className='input' />
                <button className='send-msg-btn'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default contact