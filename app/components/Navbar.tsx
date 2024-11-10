'use client'

import Link from 'next/link';
import React from 'react'


import { usePathname } from 'next/navigation'


// icons
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiEnvelope,
  } from 'react-icons/hi2';
  
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
  return (
    <nav className='flex flex-col text-3xl justify-center items-end h-screen'>
    <div className='flex flex-col  h-max w-max mr-6 p-4 rounded-full gap-4' >

{navData.map((link, index) => {
    return (
      <Link key={index} href={link.path}>
        <div 
        className={`w-12 h-12 rounded-full p-2 ${
            pathname === link.path
            ? 'bg-purple-700 text-white'
            : 'bg-[#e9ecef] text-[#6c757d] '
        }`}>{link.icon}</div>
      </Link>
    );
  })
}

    </div>
    </nav>
  )
}

export default Navbar