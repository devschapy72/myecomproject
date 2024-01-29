import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="w-full h-16 bg-gray-100 flex justify-between items-center px-5 sm:px-16 md:px-12 lg:px-20 shadow-lg">
     <div className='flex items-center gap-1 uppercase font-serif text-lg sm:text-xl md:text-2xl'>
     <Link to='/'>
     <figure className='w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 border-2  border-green-400 rounded-full overflow-hidden'>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_3AvDBY2U80SE1S2bZbvX5lZE-xxUE75zQ&usqp=CAU" 
        alt="logo" 
        className='w-full h-full object-cover'/>   
      </figure>
     </Link>
      <h2>online <span className='text-gray-500'>shop</span></h2>
     </div>

     {/* NAV-MENU */}
      <NavBar/>
    </div>
  )
}

export default Header