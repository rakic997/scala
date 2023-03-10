import React, { useState, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/ui/Loader'

import AddImage from '../assets/v.webp'

import { useFetch } from '../hooks/useFetch'
import type IProduct from '../types/types'

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'

export default function Products (): JSX.Element {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)
  const [sortType, setSortType] = useState('name')
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products')
  const location = useLocation()
  const { id: category } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categoryProducts = products.filter((product: IProduct) => product.category === category)
  const bredcrumb = location.pathname.replace(/%20/g, ' ')

  return (
        <div className='category-page'>
            <header className='category-banner'>
                <div className='container'>
                    <h1>{(category != null) && capitalizeFirstLetter(category)}</h1>
                    <span>{bredcrumb}</span>
                </div>
            </header>

            {(Boolean((error ?? false))) && <h1>Error</h1>}
            {loading && <Loader />}
            {(Boolean(products)) &&
                <section className='category'>
                    <div className='container'>
                        <div className='filters'>
                            <span className='products-number'>{categoryProducts.length} results</span>
                            <div className='sort' onClick={() => { setIsSortDropdownOpen(prev => !prev) }}>
                                <h6>Sort by</h6>
                                <ul className={isSortDropdownOpen ? 'sort-options open' : 'sort-options'}>
                                    <li onClick={() => { setSortType('name') }}>Name</li>
                                    <li onClick={() => { setSortType('price') }}>Price</li>
                                    <li onClick={() => { setSortType('rating') }}>Rating</li>
                                </ul>
                                <span className='sort-type'>{sortType}</span>
                            </div>
                        </div>
                        <div className='category-products'>
                            {categoryProducts
                              .sort((a: IProduct, b: IProduct) =>
                                sortType === 'name'
                                  ? a.title > b.title ? 1 : -1
                                  : sortType === 'price'
                                    ? b.id - a.id
                                    : b.rating.rate - a.rating.rate
                              )
                              .map((product: IProduct) => (
                                    <div className='product-container' key={product.id}>
                                        <Link to={`/product/${product.id}`}>
                                            <Product
                                                product={product} />
                                        </Link>
                                    </div>
                              ))}
                        </div>
                    </div>
                </section>}

            <section className='advr'>
                <img src={AddImage} alt="banner" />

                <div className='container'>
                    <div className='advr-content'>
                        <h6>All products sale up off to 40%</h6>
                        <h3>Garniture on sale</h3>
                        <div className='subscribe'>
                            <input type='email' placeholder='Just for preview purpose' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}
