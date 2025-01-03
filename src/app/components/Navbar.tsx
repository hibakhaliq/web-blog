import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl text-emerald-700">Hiba Khaliq</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-emerald-600">Home</Link>
      <Link href={"#Blog"} className="mr-5 hover:text-emerald-600">Blogs</Link>
      </nav>
    
    
    
  </div>
</header>
    </div>
  )
}

export default Navbar