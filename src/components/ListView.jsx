import React from 'react'
import FormatPrice from './FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
      <div>
        {
          products.map((curELm) => {
            const {id, name, image, price, description} = curELm;
            return(
              <div key={curELm.id} className='grid grid-cols-2 gap-2 border-balck border-2 py-3 px-3 my-6'>
                 <figure className='flex justify-center items-center'>
                  <img 
                  src={image} 
                  alt={name}
                  className="h-24 sm:h-36 object-cover"/>
                 </figure>
                 <div>
                  <p className='text-md sm:text-xl capitalize'>{name}</p>
                  <p className='text-xs sm:text-sm my-2'><FormatPrice price={price}/></p>
                  <p className='text-[9px] sm:text-[13px]'>{description.slice(0, 90)}</p>
                  <NavLink to={`/singlepage/${id}`}>
                    <button className='text-xs sm:text-sm my-3 bg-blue-400 px-3 sm:px-7 py-2 sm:py-3 border-blue-400 border-2 hover:bg-transparent duration-300 text-gray-100 hover:text-gray-700'>Read More</button>
                  </NavLink>
                 </div>
              </div>
            )
          })
        }
      </div>
  )
}

export default ListView