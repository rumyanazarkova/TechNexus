import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  Products,
  Cart,
  PrivateRoute,
  SingleProduct,
  Error,
  Checkout,
  About,
  Auth,
  
} from './pages'
import Favorites from './pages/Favorites'


function App() {
  return (
    <Router>
      <Auth>
      <Navbar/>
      <Sidebar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='cart' element={<Cart/>}/>
       <Route path='favorites' element={<Favorites/>}/>
       <Route path='products' element={<Products/>}/>
       <Route path='products/:id' element={<SingleProduct/>}/>
       <Route path='checkout' element={
       <PrivateRoute>
       <Checkout/>
       </PrivateRoute>
       }/>
       <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </Auth>
    </Router>
  )

}

export default App
