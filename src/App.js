import React from 'react'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import Checkout from './components/pages/Checkout'
import Wishlist from './components/pages/Wishlist'
import Account from './components/pages/Account'
import PageNotFound from './components/pages/PageNotFound'


function App() {
  return (
    <>
    <Routes>
    <Route path="" element={<Home />} /> 
    <Route path='/shop' element={<Shop />} /> 
    <Route path='/product' element={<Product />} />
    <Route path="/contact" element={<Contact />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/wishlist' element={<Wishlist />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/login-signup' element={<Login />} />  
    <Route path='/user-account' element={<Account />} />
    <Route path='/404' element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App