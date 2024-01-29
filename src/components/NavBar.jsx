import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartFlatbed, FaBars, FaXmark } from "react-icons/fa6";
import { useCartContext } from '../context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

// LOGIN_LOGOUT
const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  // ASIDE_BAR_OPEN_&_CLOSE_HOOK
  const [open, setOpen] = useState(false);
  const {total_item} = useCartContext();
  const openBar = () => {
   setOpen(!open)
  };

  const closeBar = () => {
  setOpen(!open)
  }

  return (
    <nav>
        <ul className='hidden lg:flex gap-10 text-sm font-serif items-center'>
            <li><NavLink to="/" className="active_menu  hover:text-blue-400 duration-300 hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="active_menu hover:text-blue-400 duration-300 hover:underline">About</NavLink></li>
            <li><NavLink to="/products" className="active_menu hover:text-blue-400 duration-300 hover:underline">All Products</NavLink></li>
            <li><NavLink to="/contact" className="active_menu hover:text-blue-400 duration-300 hover:underline">Contact</NavLink></li>

            {/* LOGIN_LOGOUT */}
            {isAuthenticated && 
            <div className='w-8 h-18  rounded-full overflow-hidden'>
              <figure>
                <img 
                src={user.picture} 
                alt={user.name} 
                className='object-cover'/>
            </figure>
            </div>
            }

            {
              isAuthenticated ? <li>
              <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin 
              } })}
              className='bg-blue-400  border-2 border-blue-400 hover:bg-transparent duration-300 hover:text-gray-600 px-4 py-2 text-gray-100 font-serif text-sm'>
                    Log Out
              </button>
              </li> 
              : 
              <li>
            <button 
            onClick={() => loginWithRedirect()}
            className='bg-blue-400 border-2 border-blue-400 hover:bg-transparent duration-300 hover:text-gray-600 px-4 py-2 text-gray-100 font-serif text-sm'>
              Log In
            </button>
            </li>

            }
            
            
           <div className='relative'>
           <li className='text-3xl'><NavLink to="/cart" className="active_menu hover:text-blue-400 duration-300 hover:underline"><FaCartFlatbed /></NavLink></li>
           <span className='absolute top-[-14%] right-[-20%] bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full'>{total_item}</span>
           </div>
        </ul>


        {/* MOBILE_NAV_BAR */}

         {/* ASIDE_BAR_OPEN */}
         <button className='lg:hidden text-xl cursor-pointer'
         onClick={openBar}>
         <FaBars />
         </button>

        {/* MOBILE_RESPONSIVE_DESGIN */}
        <ul 
        style={{right: open ? 0: "-100%"}}
        className='fixed top-0 right-0 bg-gray-500 w-full h-screen flex flex-col justify-center items-center text-gray-100 gap-8 z-50 duration-300 font-serif text-xl sm:text-2xl'>

          {/* ASIDE_BAR_CLOSE */}
          <button 
          className='relative top-[-20%] left-[-38%] text-3xl cursor-pointer'
          onClick={closeBar}>
          <FaXmark />
          </button>

            <li onClick={closeBar}><NavLink to="/" className="active_menu hover:text-blue-400 duration-300 hover:underline">Home</NavLink></li>
            <li onClick={closeBar}><NavLink to="/about" className="active_menu hover:text-blue-400 duration-300 hover:underline">About</NavLink></li>
            <li onClick={closeBar}><NavLink to="/products" className="active_menu hover:text-blue-400 duration-300 hover:underline">ALL Products</NavLink></li>
            <li onClick={closeBar}><NavLink to="/contact" className="active_menu hover:text-blue-400 duration-300 hover:underline">Contact</NavLink></li>

            {/* LOGIN_LOGOUT */}

            {isAuthenticated && 
            <div className='w-8 h-18  rounded-full overflow-hidden'>
              <figure>
                <img 
                src={user.picture} 
                alt={user.name} 
                className='object-cover'/>
            </figure>
            </div>
            }

            {
              isAuthenticated ? <li  onClick={closeBar}>
              <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin
               } })}
               className='bg-blue-400  border-2 border-blue-400 hover:bg-transparent duration-300 hover:text-gray-600 px-4 py-2 text-gray-100 font-serif text-sm'>
                    Log Out
              </button>
              </li> 
              : 
              <li>
            <button 
            onClick={() => loginWithRedirect()}
            className='bg-blue-400  border-2 border-blue-400 hover:bg-transparent duration-300 hover:text-gray-600 px-4 py-2 text-gray-100 font-serif text-sm'>
              Log In
              </button>
            </li>
            
            }
           <div className='relative'>
           <li  onClick={closeBar} className='text-3xl'><NavLink to="/cart" className="active_menu hover:text-blue-400 duration-300 hover:underline"><FaCartFlatbed /></NavLink></li>
           <span className='absolute top-[-14%] right-[-20%] bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full'>{total_item}</span>
           </div>
        </ul>
    </nav>
  )
}

export default NavBar