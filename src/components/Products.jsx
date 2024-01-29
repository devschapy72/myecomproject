import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductList from './ProductList'

const Products = () => {

  return (
      <div className=' w-11/12 mx-auto grid lg:grid-cols-2 my-10'>
      <div className='grid lg:justify-center'>
        <FilterSection />
      </div>
      <div>
        <div>
          <Sort />
        </div>
        <div className='my-10'>
          <ProductList />
        </div>
      </div>
      </div>
  )
}

export default Products