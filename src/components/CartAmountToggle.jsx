import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa"

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className='flex gap-2 sm:gap-6 md:gap-8 my-3 items-center'>
      <button onClick={() => setDecrease()}
      className='hover:text-red-500 duration-300'>
        <FaMinus/>
        </button>
      <div className='text-blue-600 font-serif font-extrabold text-sm sm:text-lg lg:text-xl'>{amount}</div>
      <button onClick={() => setIncrease()}
      className='hover:text-green-500 duration-300'>
        <FaPlus/>
        </button>
    </div>
  )
}

export default CartAmountToggle