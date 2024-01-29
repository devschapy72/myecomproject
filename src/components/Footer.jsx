import React from 'react'
import { FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
   <div className='w-full h-auto bg-gray-900 text-gray-100'>
     <div className='w-9/12 h-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto pt-20 gap-8'>

<div>
  <h3 className='text-sm font-serif uppercase mb-2'>sumon ecommerce</h3>
  <p className='text-[13px]'>Shop online with ease. Explore products, enjoy secure checkout, and receive doorstep delivery</p>
</div>

<div>
 <h3 className='text-sm font-serif mb-5 capitalize'> Subscribe to get important updates</h3>
  <input 
  type="email" 
  name='email' 
  id='email' 
  autoComplete='off' 
  placeholder='your-email' 
  className='pl-2 text-[13px] h-7 placeholder:uppercase font-serif mb-2 outline-none text-gray-700'/>
  <input 
  type="submit" 
  value="SUBSCRIBE" 
  className='bg-blue-400 px-5 py-2 font-serif text-[12px] border-2 border-blue-400 hover:bg-transparent duration-300 cursor-pointer outline-none block'/>
</div>

<div>
  <h3 className='text-sm font-serif mb-2 capitalize'>Follow Us</h3>
  <div className='flex gap-3'>
    <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center text-gray-50 hover:bg-gray-500 duration-300'>
   <a href="https://www.linkedin.com/in/md-sumon-ahamed-57573b2a1/"><FaLinkedinIn /></a>
    </div>
    <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center text-gray-50 hover:bg-gray-500 duration-300'>
    <a href="https://github.com/devschapy72"><FaGithub /></a>
    </div>
    <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center text-gray-50 hover:bg-gray-500 duration-300'>
    <a href="4"><FaDiscord /></a>
    </div>
  </div>
</div>

<div>
<h3 className='text-sm font-serif mb-2 capitalize'>Call Us</h3>
<p className='text-sm '>+880 123456789</p>
</div>

</div>
<hr className='mt-10'/>

<div className='w-9/12 mx-auto grid sm:grid-cols-2 py-4 sm:text-[13px] text-xs md:text-sm gap-5'>
  <p>@{new Date().getFullYear()} sumonEcommerce. All Rights Reserved</p>
  <div>
    <p className='mb-1'>PRIVACY POLICY</p>
    <p>TERMS & CONDITIONS</p>
  </div>
</div>
   </div>
  )
}

export default Footer