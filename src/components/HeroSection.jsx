import React from 'react'
import { Link } from 'react-router-dom';



const HeroSection = ({Data}) => {
    const { name, image } = Data;
  return (
    <div className='w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12 h-[90vh] md:h-[60vh] lg:h-[70vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 content-center'>
        <div className='text-center md:text-start'>
            <p className='text-sm uppercase text-blue-600 font-serif'>welcome to</p>
            <h1 className='text-3xl lg:text-4xl uppercase my-2 font-serif '>{name}</h1>
            <p className='text-[12px] sm:text-[13px] md:text-[12px] lg:text-[14px] font-serif mb-8 sm:mb-12 md:mb-16'>Revamp your style at our shop. Trendy fashion, must-have gadgets, and more await. Enjoy a seamless shopping experience with quick delivery. Elevate your lifestyle effortlessly with us!</p>
            <Link to="/products">
                <button className='bg-blue-400 px-10 py-3 text-gray-100 capitalize shadow-lg hover:shadow-none duration-300 outline-none'>shop now</button>
            </Link>
        </div>

        <figure>
            <img src={image} alt="family_shop"/>
        </figure>
    </div>
  )
}

export default HeroSection