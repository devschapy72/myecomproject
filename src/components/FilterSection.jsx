import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import { FaCheck } from "react-icons/fa6";
import FormatPrice from './FormatPrice';

const FilterSection = () => {
  const {filters: {text, category, color, price, maxPrice, minPrice}, updateFilterValue, allProducts, clearFilters} = useFilterContext();


  // TO_GET_THE_UNIQUE_DATA
   const getUniqueData = (data, arrt) => {
     let newValue = data.map((curELm) => {
      return curELm[arrt]
     });
     if(arrt === "colors"){
      newValue = newValue.flat();
     }
     return (newValue = ["all",...new Set(newValue)]);
   }

  // WE_NEED_UNIQUE_DATA
  const categoryOnlyData = getUniqueData(allProducts, "category")
  const companyData = getUniqueData(allProducts, "company")
  const colorData = getUniqueData(allProducts, "colors")

  return (
    <div className='grid lg:block sm:grid-cols-3 lg:grid-cols-none mb-16 lg:mb-0 sm:justify-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" 
        name='text'
        value={text}
        placeholder='Search'
        onChange={updateFilterValue}
        className='border-2 border-gray-400 outline-none text-sm py-1 px-2'/> 
      </form>

      {/* CATEGOTY */}
      <div className='mt-4'>
        <h3 className='text-md font-serif font-medium'>Category</h3>
        <div className=''>
        {
          categoryOnlyData.map((curELm, index) => {
             return <button 
             key={index} 
             type='button' 
             name='category'
             value={curELm}
             onClick={updateFilterValue}
             className='grid mt-2 text-[13px] capitalize'>
              {curELm}
             </button>   
          })
        }
        </div>
      </div>
       {/* COMPANY */}
      <div>
         <h3 className='mt-6 text-md font-serif font-medium'>Company</h3>
         <form action="#">
          <select 
          name="company" 
          id="company"
          onClick={updateFilterValue}
          className='border-2 text-[13px] capitalize mt-2 py-[1px] pl-2 outline-none'>
            {
               companyData.map((curELm, index) => {
                 return(
                  <option 
                  value={curELm} 
                  key={index} 
                  name="company"
                  className='capitalize text-[13px]'>
                    {curELm}
                  </option>
                 )
               })
            }
          </select>
         </form>
      </div>

      {/* COLOR */}
      <div>
        <h3 className='mt-6 mb-2 text-md font-serif font-medium'>Colors</h3>
        <div className='flex items-center gap-2 text-[13px]'>
        {
           colorData.map((curColor, index) => {
            if(curColor === "all"){
              return <button
              key={index}
              type='button'
              name='color'
              value={curColor}
              onClick={updateFilterValue}>
               All
                </button>
            }
            return <button
            key={index}
            type='button'
            name='color'
            value={curColor}
            onClick={updateFilterValue}
            style={{backgroundColor: curColor}}
            className={color === curColor ? "w-4 h-4 rounded-full opacity-100 flex justify-center items-center" : "w-4 h-4 rounded-full  opacity-50 hover:opacity-100 duration-300 cursor-pointer flex justify-center items-center"}>
              {color == curColor ? <FaCheck className='text-gray-100 text-xs'/> : null}
              </button>
           })
        }
        </div>
      </div>

      {/* SLIDER_PRICE */}
      <div className='mt-6'>
        <h3 className='mb-2 text-md font-serif font-medium'>Price</h3>
        <p className='text-[13px]'><FormatPrice price={price}/></p>
        <input 
        type="range" 
        name='price'
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue}/>
      </div>

      {/* CLEAR_FILTERS */}
      <div className='my-7'>
        <button 
        onClick={clearFilters}
        className='bg-red-400 hover:bg-red-500 duration-300 cursor-pointer outline-none text-sm px-7 py-3 text-gray-100 font-serif '>
          Clear Filters
          </button>
      </div>
    </div>
  )
}

export default FilterSection