import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-full h-[89vh] bg-orange-400 flex flex-col justify-center items-center px-5 text-gray-100'>
      <h3 className='text-4xl font-serif'>😶 O p s!</h3>
      <p className='text-5xl font-serif my-10'>4 🙄 4</p>
      <p className='text-sm  text-center mb-10'>Something went wrong. Return to the homepage for a fresh start. Apologies for the inconvenience.</p>
      <Link to='/'>
        <button className='bg-orange-500 px-16 py-4 border-2 border-orange-500 hover:bg-transparent duration-300 '>Go back</button>
      </Link>
    </div>
  )
}

export default Error