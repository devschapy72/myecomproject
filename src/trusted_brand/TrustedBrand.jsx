import React from 'react'
import TrustedApi from './TrustedApi'

const TrustedBrand = () => {
  return (
    <div className='w-full h-auto bg-gray-100 my-24 shadow-black shadow-sm duration-300 hover:shadow-none'>
        <h3 className='text-gray-700 text-center py-6 text-xl sm:text-2xl md:text-3xl capitalize font-serif'>trusted by 1000+ companies</h3>
        <div className='w-10/12 lg:w-11/12 xl:w-8/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-4 py-10'>
           {
            TrustedApi.map((curELm) => {
             const {id, image} = curELm;
             return(
                <div key={id}>
                <figure>
                    <img 
                    src={image} 
                    alt="company_name" 
                    className='w-full sm:h-48 md:h-32 '/>
                </figure>
                </div>
             )
            })
           }
        </div>
    </div>
  )
}

export default TrustedBrand