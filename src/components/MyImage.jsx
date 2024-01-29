import React, { useState } from 'react'

const MyImage = ({imgs = [{ url: "" }] }) => {
  const[selectImage, setSelectImage] = useState(imgs[0]);

  return (
    <div className='grid lg:grid-cols-2 items-center gap-6'>
    <div className='grid grid-cols-4 lg:grid-cols-none justify-end gap-3'>
      {
        imgs.map((curELm, index) => {
          return(
            <figure key={index}>
              <img 
              src={curELm.url} 
              alt={curELm.filename} 
              className='h-full sm:h-[6rem] w-full sm:w-[10rem]  object-cover hover:scale-x-[1.1] cursor-pointer duration-300'
              onClick={() => setSelectImage(curELm)}
              />
            </figure>
          )
        })
      }
    </div>

    {/* 2ND_COLUMN */}
    <div className='w-full flex justify-center'>
      <img src={selectImage.url} alt={selectImage.filename} className='h-[7rem] sm:h-[10rem] lg:h-full'/>
    </div>
    </div>
  )
}

export default MyImage