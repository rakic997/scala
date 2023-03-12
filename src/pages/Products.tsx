import React, { useState, useEffect, useRef } from 'react'
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
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categoryProducts = products.filter((product: IProduct) => product.category === category)
  const bredcrumb = location.pathname.replace(/%20/g, ' ')

  function handleSort (sortType: string): (a: any, b: any) => number {
    switch (sortType) {
      case 'name':
        return (a, b) => a.title.localeCompare(b.title)
      case 'price':
        return (a, b) => b.price - a.price
      case 'rating':
        return (a, b) => b.rating.rate - a.rating.rate
      default:
        return () => 0
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.onclick = (event) => {
      if ((Boolean((event.target as HTMLDivElement).contains(dropdownRef.current))) &&
          event.target !== dropdownRef.current) {
        setIsSortDropdownOpen(false)
      }
    }
  }, [])

  return (
        <div className='category-page'>
            <header className='category-banner'>
                <div className='container'>
                    <h1>{(category != null) && capitalizeFirstLetter(category)}</h1>
                    <span>{bredcrumb}</span>
                </div>
            </header>

            {(Boolean(error)) && <h1>Error</h1>}
            {loading && <Loader />}
            {(Boolean(products)) &&
                <section className='category'>
                    <div className='container'>
                        <div className='filters'>
                            <span className='products-number'>{categoryProducts.length} results</span>
                            <div className='sort' ref={dropdownRef} onClick={() => { setIsSortDropdownOpen(prev => !prev) }}>
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
                              .sort(handleSort(sortType))
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
