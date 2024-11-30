'use client'

import React from 'react'
import Image from 'next/image'
import image1 from '../../images/web-design.png'
import image2 from '../../images/badge.png'
import image3 from '../../images/responsive.png'
import image4 from '../../images/maintenance.png'
import image5 from '../../images/creativity.png'
import image6 from '../../images/web.png'

import '../../app/styles/services.css'



const services = () => {
   
  return (
    <div className='main-services-container'>
        <div  className='text-container'>
            <h1 className='grey-heading'>MY</h1>
            <h1 className='purple-heading'>SERVICES.</h1>
        </div>
        <div className=' services-container '>

<div className='container1'>
            <div className='container' data-aos="fade-right" data-aos-duration="2000">
               <div className='inner-content'> <Image
                src={image1}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>UI / UX DESIGN</h2>
                <p className='des'>Lorem ipsum amet consectetur adipisicing elit. Voluptas, porro rerum  recusandae nisi. </p> </div>
            </div>
            <div className='container' data-aos="fade-up"
     data-aos-duration="2000">
         <div className='inner-content'> <Image
                src={image2}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>BRANDING & IDENTITY</h2>
                <p className='des'>  dolor sit amet consectetur adipisicing elit. Voluptas, porro rerum numquam. </p> </div>
     </div>
            <div className='container' data-aos="fade-left" data-aos-duration="2000" >
            <div className='inner-content'> <Image
                src={image3}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>FULLY RESPONSIVE</h2>
                <p className='des'>   amet consectetur adipisicing elit. Voluptas, porro rerum nisi. </p> </div>
            </div>
            </div>

            
<div className='container2'>
            <div className='container' data-aos="fade-right" data-aos-duration="2000">
               <div className='inner-content'> <Image
                src={image4}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>Maintenance & Support</h2>
                <p className='des'>ipsum consectetur adipisicing elit. Voluptas, porro rerum  recusandae. </p> </div>
            </div>
            <div className='container' data-aos="fade-up"
     data-aos-duration="2000">
         <div className='inner-content'> <Image
                src={image5}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>Creative Design</h2>
                <p className='des'>  dolor sit amet consectetur adipisicing elit. Voluptas, porro rerum numquam nisi. </p> </div>
     </div>
            <div className='container' data-aos="fade-left" data-aos-duration="2000" >
            <div className='inner-content'> <Image
                src={image6}
                alt=''
                width={90}
                height={90}/>
                
                <h2 className='service'>Conversation Optimization</h2>
                <p className='des'>   adipisicing elit, Voluptas, porro rerum numquam recusandae nisi. </p> </div>
            </div>
            </div>
        </div>


        
    </div>
  )
}

export default services