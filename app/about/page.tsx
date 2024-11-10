import React from 'react'

const about = () => {
  return (
    <div className='relative top-24 left 10'>
        <div className='flex justify-center gap-2 text-6xl font-extrabold'>
        <h1 className='text-purple-800'>ABOUT</h1>
        <h1 className='text-gray-600'>ME.</h1>
        </div>
        <div className='flex flex-row gap-10 w-[85%]'>
            <div className='flex flex-row w-[90%] relative top-14 left-10 gap-16 text-[19px]'>
                <div>
                <strong>Name:</strong>
                <p>Syeda Barha</p>
                <br />
                <strong>Date of birth:</strong>
                <p>12/05/2007</p>
                <br />
                <strong>Residence:</strong>
                <p>Karachi</p>
                </div>
           
            <div>
                <strong>Email:</strong>
                <p>sbs86@gmail.com</p>
                <br />
                <strong>Phone:</strong>
                <p>+92 345 9996615</p>
                <br />
                <strong>Freelance:</strong>
                <p>Available</p>
            </div>
            </div>


            <div className='flex flex-col gap-10 relative top-10' data-aos="zoom-in" data-aos-duration="2000" >
            <div className='flex flex-row gap-16'>
                <div className='w-[200px] h-[156px] border-2 border-purple-800 rounded-2xl'>
                   <div className='p-6'><p className='text-purple-800 font-bold  text-4xl'>15+</p><span className='text-4xl font-thin'>-</span><span className='text-2xl uppercase font-light'>Projects Completed</span></div> 
                </div>
                <div className='w-[200px] h-[156px] border-2 border-purple-800 rounded-2xl'>
                <div className='p-3 text-center'>  <p className='text-purple-800 font-bold  text-4xl p-3'>3900+</p><span className='text-4xl font-thin'>-</span><span className='text-2xl uppercase font-light'>Lines of Code</span> </div> 
                </div>
            </div> 
            <div className='flex flex-row gap-16'>  
                <div className='w-[200px] h-[156px] border-2 border-purple-800 rounded-2xl'>
                <div className='p-6'> <p className='text-purple-800 font-bold  text-4xl'>7+</p><span className='text-4xl font-thin'>-</span><span className='text-2xl uppercase font-light'>Hours daily spent</span> </div> 
                </div>
                <div className='w-[200px] h-[156px] border-2 border-purple-800 rounded-2xl'>
                <div className='p-7'> <p className='text-purple-800 font-bold  text-4xl'>5+</p><span className='text-4xl font-thin'>-</span><span className='text-[22px] uppercase font-light'>Milestones Achieved</span> </div> 
                </div>
                </div> 
            </div>
        </div>

        <button className='relative left-10 bottom-10 w-[155px] h-[45px] text-center border-2 border-purple-800 rounded-3xl text-[20px] font-bold text-gray-600 hover:bg-purple-700 hover:text-white transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-2xl after:opacity-0 hover:after:opacity-100 hover:after:scale-125'>View Resume</button>
    </div>
  )
}

export default about