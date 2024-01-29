import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import MyImage from '../components/MyImage';
import { TbTruckDelivery, TbReplace, TbTruck } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import FormatPrice from '../components/FormatPrice';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';


const API = "https://api.pujakaitem.com/api/products";

const SingelProductDetails = () => {
  const { getSinglePage, singleLoading,  singleProduct } = useProductContext();
  const {id} = useParams();

  const {
    id: extra,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,

  } = singleProduct

  useEffect(() => {
   getSinglePage(`${API}?id=${id}`);
  }, []);
  

  if(singleLoading){
    return <div>Loading.......</div>
  };

  
  return (
    <>
    <div className='w-full h-8 bg-gray-200 pl-10'><Link to='/' className='text-blue-600 hover:text-blue-700 duration-300 active_menu hover:underline'>Home</Link> / {name}</div>
    <div className='w-10/12 sm:w-8/12 md:w-7/12 lg:w-10/12 xl:w-8/12 h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 gap-16 lg:gap-6'>
      <div>
        <MyImage imgs = {image}/>
      </div>
      <div>
        <h2 className='text-4xl capitalize font-serif mb-4'>{name}</h2>
        <Stars stars={stars} reviews={reviews}/>
        <p className='my-4 text-sm'>MRP: <del><FormatPrice price={price + 250000}/></del></p>
        <p className='text-sm text-blue-800'>Deal of the Day: <FormatPrice price={price}/></p>
        <p className='text-[13px] my-5'>{description}</p>
        <div className='grid grid-cols-2 sm:grid-cols-4 items-center gap-5 md:gap-1'>
          <div className='flex flex-col items-center gap-1'>
          <span className='bg-gray-300 text-xl w-9 h-9 rounded-full flex justify-center items-center'><TbTruckDelivery /></span>
          <p className='text-[10px]'>Free Delivery</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
          <span  className='bg-gray-300 text-xl w-9 h-9 rounded-full flex justify-center items-center'><TbReplace /></span>
          <p className='text-[10px]'>30 Days Replacement</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
          <span  className='bg-gray-300 text-xl w-9 h-9 rounded-full flex justify-center items-center'><TbTruck /></span>
          <p className='text-[10px]'>Sumon Delivered</p>
          </div>

          <div className='flex flex-col items-center gap-1'>
          <span  className='bg-gray-300 text-xl w-9 h-9 rounded-full flex justify-center items-center'><MdSecurity /></span>
          <p className='text-[10px]'>2 Year Warranty</p>
          </div>

        </div>
        <hr className='my-4'/>
        <p className='text-sm'>Available : <span className='text-[13px] font-serif text-blue-900'>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
        <p className='text-sm my-3'>Id : <span className='text-[13px] font-serif text-blue-900'>{id}</span></p>
        <p className='text-sm'>Brand : <span className='text-[13px] font-serif text-blue-900'>{company}</span></p>
        <p className='text-sm my-3'>Category : <span className='text-[13px] font-serif text-blue-900'>{category}</span></p>

        <hr className='my-3 '/>
        {
          stock > 0 && <AddToCart product = {singleProduct}/>
        }
      </div>
    </div>
    </>
  )
}

export default SingelProductDetails