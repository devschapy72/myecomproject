import React from 'react'
import FormatPrice from './FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/CartContext'

const CartItem = ({ id, name, image, price, color, amount }) => {

    const {removeItem, setDecrement, setIncrement} = useCartContext();

  return (
    <div className='grid grid-cols-3 md:grid-cols-5 items-center text-xs sm:text-sm'>
        {/* DIV1 IMAGE_AND_COLOR */}
        <div className='sm:grid grid-cols-2 gap-1 sm:gap-3 mt-4'>
            <figure>
                <img src={image} alt={id}/>
            </figure>
            {/* DIV_2_COLOMUNS */}
            <div className='flex flex-col justify-center text-xs sm:text-sm md:text-[11px] lg:text-sm mb-3 mt-1'>
                <p >{name}</p>
               <div className='flex items-center gap-1'>
               <p>Color:</p>
                <div 
                style={{backgroundColor: color, color: color}}
                className='w-2 md:w-3 h-2 md:h-3 rounded-full'>

                </div>
               </div>
            </div>
        </div>
         {/* DIV 2 PRICE */}
         <div className='hidden md:flex justify-center'>
         <p><FormatPrice price={price}/></p>
         </div>
          {/* DIV 3 Quantity*/}
        <div className='text-xs flex justify-center'>
        <CartAmountToggle 
        amount = {amount}
        setDecrease = {() => setDecrement(id)}
        setIncrease = {() => setIncrement(id)}
       />
        </div>

         {/* DIV 4 subtotal*/}
        <div className='hidden md:flex justify-center'>
            <p><FormatPrice price={price * amount}/></p>
        </div>

         {/* DIV 5 remove*/}
         <div className='flex justify-center'>
         <FaTrash 
         onClick={() => removeItem(id)}
         className='text-green-500 hover:text-red-500 duration-300 cursor-pointer'/>
         </div>
    </div>
  )
}

export default CartItem