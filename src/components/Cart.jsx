import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom'
import FormatPrice from './FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const {cart, clearCart, total_price, shipping_fee} = useCartContext();
  const { isAuthenticated, user } = useAuth0();

  if(cart.length === 0) {
    return <div className='w-full h-[50vh] flex flex-col gap-12 justify-center items-center'>
      <h3 
      className='text-2xl sm:text-4xl md:text-5xl font-serif font-semibold text-orange-300'>
        No Cart in Item🙄
        </h3>
        <NavLink to="/products">
        <button
        className='bg-orange-400 border-orange-400 border-2 px-12 py-3 text-sm font-serif hover:bg-transparent outline-none duration-300'>
          Add Item
          </button>
        </NavLink>
    </div>
  }
  
  return (
    <>
    
      {
        isAuthenticated && 
        <div className='flex gap-3 bg-gray-300 h-12 items-center pl-10'>
          <h3>User ID: </h3>
          <div className='w-8 h-18  rounded-full overflow-hidden'>
              <figure>
                <img 
                src={user.picture} 
                alt={user.name} 
                className='object-cover'/>
            </figure>
            </div>
            <h3>{user.name}</h3>
        </div>
      }
    
    <div className='w-11/12 lg:w-10/12 xl:w-8/12 mx-auto my-10'>
      <div className='grid grid-cols-3 md:grid-cols-5 mb-5 items-center text-sm sm:text-md font-serif font-medium'>
        <p className='flex justify-center'>Item</p>
        <p className='hidden md:flex justify-center'>Price</p>
        <p className='flex justify-center'>Quantity</p>
        <p className='hidden md:flex justify-center'>Subtotal</p>
        <p className='flex justify-center'>Remove</p>
      </div>
      <hr  className='sm:mb-6'/>
      <div className='mb-6'>
        {
          cart.map((curElm) => {
            return <CartItem key={curElm.id} {...curElm}/>
          })
        }
      </div>
      <hr className='mb-7'/>

      {/* CONTINUE_SHOPING_AND_CLEAR_ITEMS */}
      <div className='flex justify-between'>
        <NavLink 
        to="/products">
          <button className='bg-blue-500 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-gray-100 font-serif font-medium hover:bg-green-500 duration-300'>
            Continue Shoping
            </button>
            </NavLink>
        <button 
        onClick={clearCart}
        className='bg-green-500 px-5 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm text-gray-100 font-serif font-medium hover:bg-red-500 duration-300'>
          Clear Cart
          </button>
      </div>

      {/* TOTAL_ITEMS_PRICE */}
     <div className='w-full flex justify-end my-6'>
     <div className='bg-gray-100 shadow-md w-52 px-3'>
        <div className='flex gap-2 mt-5'>
          <p className='text-base font-serif font-medium'>Subtotal:</p>
          <p className='text-sm'><FormatPrice price={total_price}/></p>
        </div>
        <div className='flex gap-2 my-3'>
          <p className='text-base font-serif font-medium'>Shipping fee:</p>
          <p className='text-sm '><FormatPrice price={shipping_fee}/></p>
        </div>
        <hr className='mb-3'/>
        <div className='flex gap-2 mb-5'>
          <p className='text-base font-serif font-medium'>Order total:</p>
          <p className='text-sm'><FormatPrice price={shipping_fee + total_price}/></p>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Cart