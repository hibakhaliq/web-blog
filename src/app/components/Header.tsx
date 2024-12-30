"use client"
import React from 'react'
import Image from 'next/image'

import Link from 'next/link';

const Header = () => {
  return (
    
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-emerald-700 text-center">
        Welcome To My Blog
 
      </h1>
      <div className='w-[100px] h-[2px] bg-emerald-700'></div>
      <p className="mb-8 leading-relaxed text-center">
      Welcome to my web development blog! Here, I dive deep into the latest technologies, tools, and trends that are shaping the world of web development. Whether you're exploring frameworks like Next.js, mastering styling with Tailwind CSS, or looking for helpful tips and tutorials, you'll find practical content designed to make your development journey smoother.
      </p>
      <div className="flex justify-center">
        <Link href ={"#Contact"}>
        <button className="text-center inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
        Explore More
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className=" object-center  mx-auto w-[50rem]"
        alt="hero"
        width={800}
        height={800}
        src= {require("../../../public/Welcome.jpg")}
      />
    </div>
   </div>
</section>

    
  )
}

export default Header