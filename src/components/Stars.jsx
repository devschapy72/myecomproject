import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

const Stars = ({ stars, reviews }) => {
    const retingStars = Array.from({ length: 5 }, (elm, index) => {
        
        let number = index + 0.5;

        return (
            <span key={index}>
              {
                stars >= index + 1
                ? <FaStar/>:
                stars >= number
                ? <FaStarHalfAlt className='text-lg'/>:
                <AiOutlineStar />
              }
            </span>
        )
    })
  return (
    <div className='flex items-center gap-2'>
        <p className='flex items-center text-orange-400 '>{retingStars}</p>
        <p className='text-xs'>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars