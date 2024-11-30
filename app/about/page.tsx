import React from 'react'



import { SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss
} from "react-icons/si";

import '../../app/styles/about.css'



const about = () => {
  return (
    <div className='main-about-container'>
        <div className='about-text-container'>
        <h1 className='purple-heading'>ABOUT</h1>
        <h1 className='grey-heading'>ME.</h1>
        </div>
        <div className='about-container'>
            <div className='personal-about'  data-aos="fade-right">
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


            <div className='professional-about' data-aos="zoom-in" data-aos-duration="2000" >
            <div className='about-container1'>
                <div className='box-container'>
                   <div className='inner'><p className='value'>15+</p><span className='rule'>-</span><span className='info'>Projects Completed</span></div> 
                </div>
                <div className='box-container'>
                <div className='inner'>  <p className='value'>3900+</p><span className='rule'>-</span><span className='info'>Lines of Code</span> </div> 
                </div>
            </div> 
            <div className='about-container2'>  
                <div className='box-container'>
                <div className='inner'> <p className='value'>7+</p><span className='rule'>-</span><span className='info'>Hours daily spent</span> </div> 
                </div>
                <div className='box-container'>
                <div className='inner'> <p className='value'>5+</p><span className='rule'>-</span><span className='info'>Milestones Achieved</span> </div> 
                </div>
                </div> 
            </div>
        </div>

        <a href="https://basic-static-resume-5gjxvyxf3-syeda-ayeshas-projects-5e56a146.vercel.app/" target='_blank'><button className='view-resume-btn'>View Resume</button></a>


<div className='tech-skills-container'>
        <div className='tech-container'  data-aos="fade-up">
            <div>
                <h1 className='tech-h'>My Focus is on building impactful digital experiences using 
                </h1>
                <h1 className='tech-heading'>modern technologies.</h1>
            </div>
            <div className='icons-container'>
                <div className='icons-container1'>

                  <div className='icons'> 
                     <SiHtml5 size={100} className='html'/> 
                     <h1>HTML</h1>
                  </div>
                    <div className='icons'>  
                        <SiCss3 size={100} className='css'/> 
                        <h1>CSS</h1>
                         </div>
                    <div className='icons'>  <SiJavascript size={100} className='javascript'/> 
                    <h1>Javascript</h1>
                    </div>
                    <div className='icons'>  <SiTypescript size={100} className='typescript'/> 
                    <h1>Typescript</h1>
                    </div>

                </div>
                <div className='icons-container2' >
                    <div className='icons'>  <SiNextdotjs   size={100} className='next j.s'/>
                    <h1>Next.js</h1>
                     </div>
                    <div className='icons'>  <SiTailwindcss  size={100} className='tailwindcss'/>
                    <h1>Tailwind CSS</h1>
                     </div>
                </div>
            </div>
        </div>

        <div className='skills-container'  data-aos="fade-up">
            <div>
                <h1 className='skills-h'>My Skills</h1>
                <h1 className='skills-heading'>in leveraging modern tools to deliver impactful user experiences.</h1>
            </div>
            <div className='main-skills-container'>
                <div className='main-skills'>
                    <div>
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle1'></circle>
                            </svg>
                                <span className='counter color1'>95%</span>
                                <h2 className='expertized-tech'>HTML</h2>
                        </div>
                    </div>
                    <div>
                    <div>
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle2'></circle>
                            </svg>
                                <span className='counter color1'>75%</span>
                                <h2 className='expertized-tech'>CSS</h2>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div>
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle3'></circle>
                            </svg>
                                <span className='counter color1'>65%</span>
                                <h2 className='expertized-tech'>Javascript</h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='advanced-skills'>
                        <div>
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle4'></circle>
                            </svg>
                                <span className='counter color1'>70%</span>
                                <h2 className='expertized-tech'>Typescript</h2>
                        </div>
                    </div>
                    <div> 
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle5'></circle>
                            </svg>
                                <span className='counter color1'>85%</span>
                                <h2 className='expertized-tech'>Next J.S</h2>
                        </div>
                    </div>
                    <div> 
                        <div className='box'>
                            <svg>
                                <circle cx={80} cy={80} r={60} className='circle6'></circle>
                            </svg>
                                <span className='counter color1'>95%</span>
                                <h2 className='expertized-tech'>Tailwind CSS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default about