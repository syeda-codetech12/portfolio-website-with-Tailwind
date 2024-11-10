'use client'

import React from 'react'
import Image from 'next/image'
import image1 from '../../images/web-design.png'
import image2 from '../../images/badge.png'
import image3 from '../../images/responsive.png'

const services = () => {
   
  return (
    <div className='relative top-24 left-10'>
        <div  className='flex flex-row w-full justify-center gap-2 font-extrabold text-6xl'>
            <h1 className='text-gray-600'>MY</h1>
            <h1 className='text-purple-800'>SERVICES.</h1>
        </div>
        <div className=' flex gap-8 relative top-10 align-center justify-center '>

            <div className='w-[300px] h-[350px] border-2 border-purple-800 shadow-lg shadow-gray-600' data-aos="fade-right" data-aos-duration="2000">
               <div className='p-9 flex flex-col gap-4'> <Image
                src={image1}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='text-2xl text-gray-600 font-medium'>UI / UX DESIGN</h2>
                <p className='text-[16px] text-gray-700 font-normal'>Lorem ipsum amet consectetur adipisicing elit. Voluptas, porro rerum  recusandae nisi. </p> </div>
            </div>
            <div className='w-[300px] h-[350px] border-2 border-purple-800 shadow-lg shadow-gray-600' data-aos="fade-up"
     data-aos-duration="2000">
         <div className='p-9 flex flex-col gap-4'> <Image
                src={image2}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='text-2xl text-gray-600 font-medium'>BRANDING & IDENTITY</h2>
                <p className='text-[16px] text-gray-700 font-normal'>  dolor sit amet consectetur adipisicing elit. Voluptas, porro rerum numquam nisi. </p> </div>
     </div>
            <div className='w-[300px] h-[350px] border-2 border-purple-800 shadow-lg shadow-gray-600' data-aos="fade-left" data-aos-duration="2000" >
            <div className='p-9 flex flex-col gap-4'> <Image
                src={image3}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='text-2xl text-gray-600 font-medium'>FULLY RESPONSIVE</h2>
                <p className='text-[16px] text-gray-700 font-normal'>   amet consectetur adipisicing elit. Voluptas, porro rerum numquam recusandae nisi. </p> </div>
            </div>

        </div>
    </div>
  )
}

export default services