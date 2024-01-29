import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const AddToCart = ({ product }) => {
  const {addtoCart} = useCartContext();


    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <div>
        <p className='inline-flex items-center gap-3'>
            Colors: {
                colors.map((curColor, index) => {
                    return <button 
                    key={index} 
                    style={{backgroundColor: curColor}}
                    className={color === curColor ? "w-5 h-5 rounded-full opacity-100 flex justify-center items-center" : "w-5 h-5 rounded-full  opacity-50 hover:opacity-100 duration-300 cursor-pointer flex justify-center items-center"} 
                    onClick={() => setColor(curColor)}>
                        {color === curColor ? <FaCheck className='text-gray-100 text-xs'/> : null}
                    </button>
                })
            }
        </p>

       <CartAmountToggle 
       amount = {amount}
       setDecrease = {setDecrease}
       setIncrease = {setIncrease}
       />

       {/* ADD_TO_CART_BUTTON */}
       <NavLink to="/cart"
       onClick={() => addtoCart (id, color, amount, product)}>
        <button 
        className='bg-blue-400 px-10 py-3 text-sm text-gray-100 font-serif font-medium outline-none hover:bg-green-400 duration-300 my-3'>
          Add To Cart
          </button>
       </NavLink>



          
      
    </div>
  )
}

export default AddToCart