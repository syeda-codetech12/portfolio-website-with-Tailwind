'use client'

import Link from 'next/link';
import React, { useState } from 'react'


import { usePathname } from 'next/navigation'


import '../../app/styles/Navbar.css'

// icons
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiEnvelope,
    HiXMark
  } from 'react-icons/hi2';
  

  import { HiMenu } from "react-icons/hi";


  // nav data
  export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    {
      name: 'contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];
  
const Navbar = () => {
    const pathname = usePathname();
    const [NavMenu, setNavMenu] = useState(false);

    const toggleMenuBtn = () => {
      setNavMenu(!NavMenu);
    };

  return (
    <nav className='navbar'>
      <div className='menu-icon-div' onClick={toggleMenuBtn}>
        {NavMenu ? <HiXMark size={30} className='menu-icon' /> : <HiMenu size={30} className='menu-icon'/>}
      </div>

        <div className={`main-nav-div ${ NavMenu ? 'show-menu' : '' }`}>
 {navData.map((link, index) => (
      <Link key={index} href={link.path} style={{ textDecoration: 'none' }}>
<div className='icons-and-name'>
            <div
              className={`icon-div ${
                pathname === link.path ? 'active-icon' : 'inactive-icon'
              }`}>
              <div className='icon'>{link.icon}</div>
            </div>
            <div className={`icons-text ${
            pathname === link.path ? 'active-text' : 'inactive-text'
          }`} >{link.name} </div>
            </div>
      </Link>
       )
      )
    }
 </div>
      
    </nav>
  )
}

export default Navbar







