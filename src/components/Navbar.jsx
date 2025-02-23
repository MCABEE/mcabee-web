
'use client'


// export default Navbar;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import fonts from "@/utils/index";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '/', label: 'Product' },
    { href: '/', label: 'Why us?' },
    { href: '/', label: 'Cases' },
    { href: '/', label: 'About us' },
    { href: '/', label: 'Service' },
    { href: '/', label: 'Career' },
    { href: '/', label: 'Blog' },
    { href: '/', label: 'Contact' },
  ];

  return (
    // <nav className='w-full px-6 md:px-20 xl:px-36 2xl:px-48 py-6 flex justify-between items-center bg-white shadow-md {fonts.aeonik_regular.className}'>
    <nav className={`${fonts.aeonik_regular.className} w-full px-6 md:px-20 xl:px-36 2xl:px-48 py-6 flex justify-between items-center bg-white shadow-md`}>

    <Image src='/mcabeeLogo.svg' alt='mcabeeLogo' width={112} height={40} />
      
      <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className='hidden lg:flex gap-5 xl:gap-10'>
        {links.map((item) => (
          <h1 key={item.label} className='text-sm xl:text-base text-[#333333] cursor-pointer hover:text-blue-500'>
            {item.label}
          </h1>
        ))}
      </div>

      <h1 className='hidden lg:block text-sm xl:text-base text-[#333333] cursor-pointer'>English</h1>
      
      {isOpen && (
        <div className='z-50 lg:hidden block bg-black text-white h-screen fixed w-full top-0 right-0 transition-all duration-500 ease-out'>
          <div className='flex w-screen justify-between items-center p-4'>
            <div onClick={() => setIsOpen(false)} className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L14 14M1 14L14 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Link onClick={() => setIsOpen(false)} href='/'>
              <Image src='/mcabeeLogo.svg' alt='logo' width={112} height={40} />
            </Link>
            <div></div>
          </div>
          <hr />
          <nav className='flex flex-col pt-12 items-center h-screen text-xl font-semibold space-y-8'>
            {links.map((link, index) => (
              <Link key={link.href} onClick={() => setIsOpen(false)} href={link.href} className='cursor-pointer font-light'>
                <motion.p initial={{ y: "5vw", opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 + index * 0.1 } }}>
                  {link.label}
                </motion.p>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


