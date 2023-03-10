import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import NotFound from './pages/NotFound'

function App (): JSX.Element {
  return (
    <div className="content">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
