'use client'

import React from 'react'


import '../app/styles/home-page.css'

import Image from 'next/image'
import image from '../images/image.jpg'

import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";



import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true, 
    });
    AOS.refresh()
  }, []);
  return (

    <div className='main-container'>
      <div className='interactive'>
      </div>
      <div className='main-content'>
        <div className='image-container'>
          <Image
          src={image}
          alt='Picture of the author'
          width={400}
          height={450}
          className='image'  data-aos="fade-down-right"/>
        </div>

        <div className='text-main-container'  data-aos="zoom-in">
          <h1 className='heading-purple'>I&apos;M SYEDA BARHA.</h1>
          <h1 className='heading-grey'>A FRONTEND DEVELOPER</h1>
          <p>
I am a passionate Front-End Web Developer with a keen interest in creating seamless and user-friendly websites. I strive to deliver visually appealing and functional web experiences. I am dedicated to helping others by building intuitive websites that enhance user interaction. 
</p>


<div className='links'  data-aos="zoom-in">
                   <a href="https://www.linkedin.com/in/syeda-barha-b800412b7/" target="_blank"><div><CiLinkedin size={32} /></div></a> 
                    <a href="https://www.facebook.com" target="_blank"><div><CiFacebook size={32}/></div></a>
                    <a href="https://www.github.com/syeda-codetech12" target="_blank"><div><FaSquareGithub size={30}/></div></a>
                </div>

        </div>
      </div>

      
    </div>
  )
}

export default Page
