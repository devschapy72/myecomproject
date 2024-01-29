import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 items-center gap-3'>
        {
          products.map((curELm) => {
            return <Product key={curELm.id} {...curELm}/>
          })
        }
      </div>
    </div>
  )
}

export default GridView