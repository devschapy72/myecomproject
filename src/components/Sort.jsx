import React from 'react'
import {BsFillGridFill, BsList} from "react-icons/bs"
import { useFilterContext } from '../context/FilterContext'

const Sort = () => {
   const { filterProducts, gridView, setGridView, setListView, sorting } = useFilterContext();
  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 items-center'>
       {/* 1st_columns */}
      <div className='hidden sm:inline-flex items-center gap-5'>
        <button className={gridView ? "active  border-2 bg-gray-600 text-white px-1 py-1 text-md" : "bg-gray-200 text-gray-900 px-1 py-1 text-md"}
        onClick={setGridView}>
          <BsFillGridFill/>
          </button>
        <button className={gridView ? "bg-gray-200 text-gray-900 px-1 py-1 text-md" : " px-1 py-1 text-md active bg-gray-600 text-white"}
        onClick={setListView}>
          <BsList/>
          </button>
      </div>
       {/* 2nd_columns */}
      <p className='flex justify-center text-xs sm:text-sm'>{`${ filterProducts.length} Product Available`}</p>

      {/* 3rd_columns */}
      <div className='flex justify-end'>
        <form action="">
          <label htmlFor="sort"></label>
          <select 
          name='sort' 
          id='sort'
          className='border-2 py-1 text-xs border-gray-400'
          onClick={sorting}>
            <option value="highest">Price(highest)</option>
            <option value="lowest">Price(lowest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort