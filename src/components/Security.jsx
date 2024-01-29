import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";

const Security = () => {
  return (
   <div className='w-full h-auto bg-gray-100'>
     <div className='w-10/12 sm:w-10/12 md:w-8/12 lg:w-9/12 xl:w-8/12 mx-auto sm:grid grid-cols-2 lg:grid-cols-3 gap-10 py-14'>
        <div className='h-48 bg-gray-200 px-2 sm:px-5 shadow-md flex flex-col justify-center items-center mb-6 sm:mb-0'>
            <span className='bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-xl text-blue-800 mb-1'><FaTruckMoving /></span>
            <h3 className='text-sm font-serif font-medium capitalize'>super fast and free delivery</h3>
        </div>
        <div className='h-48 grid grid-rows-2 gap-4 mb-6 sm:mb-0'>
           <div className=' bg-gray-200 px-2 sm:px-5 shadow-md flex flex-col justify-center items-center'>
           <span className='bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-xl text-blue-800 mb-1'><SiSpringsecurity /></span>
           <h3 className='text-sm font-serif font-medium capitalize'>non-contact shipping</h3>
           </div>
            <div className=' bg-gray-200 px-2 sm:px-5 shadow-md flex flex-col justify-center items-center'>
            <span className='bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-xl text-blue-800 mb-1'><FaMoneyBill1Wave /></span>
            <h3 className='text-sm font-serif font-medium capitalize'>money-back guaranteed</h3>
            </div>
        </div>
        <div className='h-48 bg-gray-200 px-2 sm:px-5 shadow-md flex flex-col justify-center items-center'>
            <span className='bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center text-xl text-blue-800 mb-1'><RiSecurePaymentFill /></span>
            <h3 className='text-sm font-serif font-medium capitalize'>super secure payment system</h3>
        </div>
    </div>
   </div>
  )
}
export default Security