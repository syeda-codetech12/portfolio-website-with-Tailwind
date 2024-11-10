'use client'

import React from 'react'

import Image from 'next/image'
import image from '../images/image.jpg'

import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";



import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

function page() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true, 
    });
    AOS.refresh()
  }, []);
  return (
    <div className='flex flex-col lg:flex-row  h-screen'>
      <div className='bg-purple-700 lg:w-1/4 lg:block hidden z-0 relative '>
      </div>
      <div className='flex lg:flex-row md:flex-col md:left-16 lg:gap-40 absolute top-10 lg:left-10 overflow-hidden w-[90%]'>
        <div className='lg:h-[480px] w-[470px]  overflow-hidden justify-center border-[15px] border-white rounded-2xl'>
          <Image
          src={image}
          alt='Picture of the author'
          width={450}
          height={480}
          className=' z-10 overflow-hidden object-cover hidden lg:block md:block'/>
        </div>

        <div className='flex flex-col gap-5 w-[500px] justify-center mr-20'>
          <h1 className='text-4xl text-purple-800 font-bold'>I'M SYEDA BARHA.</h1>
          <h1 className='text-4xl text-gray-600 font-sans font-bold'>A FRONTEND DEVELOPER</h1>
          <p className='text-[18px] font-light sm:text-[16px]'>
I am a passionate Front-End Web Developer with a keen interest in creating seamless and user-friendly websites. My expertise lies in HTML, CSS, JavaScript, and TypeScript, and I strive to deliver visually appealing and functional web experiences. I am dedicated to helping others by building intuitive websites that enhance user interaction. 
</p>


<div className='flex gap-5 m-10 text-gray-600'>
                   <a href="https://www.linkedin.com/in/syeda-barha-b800412b7/" target="_blank"><div><CiLinkedin size={32} /></div></a> 
                    <a href="https://www.facebook.com" target="_blank"><div><CiFacebook size={32}/></div></a>
                    <a href="https://www.github.com/syeda-codetech12" target="_blank"><div><FaSquareGithub size={30}/></div></a>
                </div>

        </div>
      </div>

      
    </div>
  )
}

export default page
