import React from 'react';
import Logo from '../assets/Logo.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className='bg-gray-100 mt-16 border-t border-gray-200'>
  <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 md:gap-32 text-gray-700'>
    <div>
     <img src={Logo} alt="" className='h-24 mb-3 ' /> 
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, eius.</p>     
    </div>
    <div>
      <h3 className='text-lg mb-3 font-semibold'>Shopping Link</h3>
      <ul className='space-y-2 text-sm'>
        <li className='mb-2 hover:text-green-500'>Home</li>
        <li className='mb-2 hover:text-green-500'>About</li>
        <li className='mb-2 hover:text-green-500'>Contact</li>
        <li className='mb-2 hover:text-green-500'>T&C</li>
      </ul>
    </div>
    <div>
      <h3 className='text-lg mb-3 font-semibold'>Follow Us</h3>
      <div className=' flex text-xl space-x-2'>
        <Link className='mb-2 hover:text-blue-500'>
          <FaFacebook/>
          </Link>
        <Link className='mb-2 hover:text-pink-500'>
          <FaInstagram/>
          </Link>
        <Link className='mb-2 hover:text-blue-500'>
          <FaTwitter/>
          </Link>
        <Link className='mb-2 hover:text-green-500'>
          <FaWhatsapp/>
          </Link>
      </div>     
    </div>
  </div>
</footer>
  )
}

export default Footer