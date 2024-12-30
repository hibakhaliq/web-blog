import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-indigo-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
      <span className="ml-3 text-xl">Hiba A.Khaliq</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Hiba A.Khaliq —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='_blank'
       href={"https://github.com/hibakhaliq"}
      className="text-gray-500">
      <FaGithub className='text-3xl hover:text-[#00822b6c]' />
      </Link>

     <Link
     target='_blank'
       href={"https://www.linkedin.com/in/hiba-khaliq-"}
         className="ml-3 text-gray-500">
      <FaLinkedin className='text-3xl hover:text-[#00822b6c]' />

      </Link>
      
       
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer;