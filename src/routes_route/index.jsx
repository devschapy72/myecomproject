import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import SingelProductDetails from '../singel_page_details/SingelProductDetails'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Error from '../components/Error'




const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/singlepage/:id' element={<SingelProductDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<Error />}/>
    </Routes>
  )
}

export default Router