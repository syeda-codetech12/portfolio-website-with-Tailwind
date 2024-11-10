import React from 'react'

import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";


const contact = () => {
  return (
    <div className='relative top-24 left-10'>
        <div className='flex justify-center gap-2 text-6xl font-extrabold'>
            <h1 className='text-gray-600'>LET'S</h1>
            <h1 className='text-purple-800'>CONNECT!</h1> 
        </div>
        <div className='flex flex-row w-[95%] gap-16 relative top-14 left-10'>
            <div className='flex flex-col gap-4 '>
                <h3 className='text-2xl font-bold text-gray-700'>DON'T BE SHY!</h3>
                <p className='text-[18px] text-gray-800 font-light'>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to bring your vision to life.</p>

               <div> 
                <div className='flex gap-1'>
            <IoMailUnreadOutline className='text-purple-800' size={28}/>   
            <p className='font-medium text-[18px] text-gray-700'>MAIL ME AT:</p>
            </div>
                <p className='pl-7 font-normal'>sbs86.freelancer@gmail.com</p>
                </div>

                <div>
                <div  className='flex flex-row gap-1'>
                    <FaPhoneVolume className='text-purple-800' size={25}/>
                    <p className='font-medium text-[18px] text-gray-700'>CALL ME AT:</p>
                    </div>
                <p className='pl-7 font-normal'>+92 345 9996615 </p>
                </div>

                <div className='flex gap-5 m-10 text-gray-600'>
                   <a href="https://www.linkedin.com/in/syeda-barha-b800412b7/" target="_blank"><div><CiLinkedin size={32} /></div></a> 
                    <a href="https://www.facebook.com" target="_blank"><div><CiFacebook size={32}/></div></a>
                    <a href="https://www.github.com/syeda-codetech12" target="_blank"><div><FaSquareGithub size={30}/></div></a>
                </div>
            </div>
            <div>
                <input type="text" name='name' placeholder='Name' className='w-[500px] h-[50px] border-b-2 p-3 text-black font-medium border-purple-800 m-5' />
                <input type="text" name='email' placeholder='Email' className='w-[500px] h-[50px] border-b-2 p-3 text-black font-medium border-purple-800 m-5' />
                <input type="text" name='subject' placeholder='Subject' className='w-[500px] h-[50px] border-b-2 p-3 text-black font-medium border-purple-800 m-5' />
                <textarea  name='message' placeholder='Message' rows={5} cols={4} className='w-[500px] h-[50px] border-b-2 p-3 text-black font-medium border-purple-800 m-5' />
            </div>
        </div>
    </div>
  )
}

export default contact