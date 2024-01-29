import React from 'react'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';

const FeatureProducts = () => {

  const { featureProducts } = useProductContext();
  return (
    <div className='w-full h-auto bg-gray-100 my-16 py-10'>
      <div className='w-10/12 sm:w-7/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto '>
      <p className='uppercase text-[13px] sm:text-sm text-blue-600 font-serif'>Check now!</p>
      <h2 className='my-2 text-2xl sm:text-3xl font-serif font-medium'>Our Feature Services</h2>
      </div>
      <div className='w-10/12 sm:w-7/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        featureProducts.map((curElm, index) => {
         return <Product key={index} {...curElm}></Product>
        })
      }
      </div>
    </div>
  )
}

export default FeatureProducts