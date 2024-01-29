import React from 'react'
import {Link} from "react-router-dom"
import FormatPrice from './FormatPrice'

const Product = ({id, name, company, image, price}) => {
  return (
   <Link to={`/singlepage/${id}`}>
    <div className='w-full h-56 bg-gray-100 shadow-gray-500 shadow-md hover:shadow-none duration-300 rounded-lg overflow-hidden'>
      <div className='relative'>
        <figure>
          <img 
          src={image} 
          alt={name} 
          className='h-44 w-full object-cover hover:scale-x-[1.1] duration-300'/>
        </figure>
        <h3 className='absolute top-2 right-2 bg-gray-100 text-sm rounded-full px-4 py-1'>{company}</h3>
      </div>
      <div className='flex justify-between items-center text-sm font-serif px-2 py-3'>
        <h3 className='text-xs'>{name}</h3>
        <p className='text-xs'><FormatPrice price={price}/></p>
      </div>
    </div>
   </Link>
  )
}

export default Product