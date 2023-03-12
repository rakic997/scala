import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'

const Home = React.lazy(async () => await import('./pages/Home'))
const Products = React.lazy(async () => await import('./pages/Products'))
const ProductDetails = React.lazy(async () => await import('./pages/ProductDetails'))
const NotFound = React.lazy(async () => await import('./pages/NotFound'))

function App (): JSX.Element {
  return (
    <div className="content">
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
