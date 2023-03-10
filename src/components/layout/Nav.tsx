import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'

import Cart from '../Cart'
import Wishlist from '../Wishlist'
import Login from './Login'

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'
import Search from '../Search'

export default function Nav (): JSX.Element {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const { categories } = useProducts()
  const { pathname } = useLocation()

  function handleMenuToggle (): void {
    setIsMenuShown(prev => !prev)
  }

  useEffect(() => {
    setIsMenuShown(false)
  }, [pathname])

  return (
        <nav className="nav">
            <div className="top-header">
                <h6>Get free delivery on order over 100$</h6>
            </div>
            <div className="nav-content">
                <div className="logo">
                    <Link to="/">
                        <h1>Clarity</h1>
                    </Link>
                </div>
                <div className={isMenuShown ? 'links shown' : 'links'}>
                    <button className='close' onClick={handleMenuToggle}>x</button>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {categories?.map((category: string, idx: number) => (
                            <li key={idx}>
                                <Link to={`products/${category}`}>
                                    {capitalizeFirstLetter(category)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart-container">
                    <Search />
                    <Wishlist />
                    <Cart />
                    <Login />
                </div>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="menu-icon" onClick={handleMenuToggle}>
                    <title />
                    <g data-name="1" id="_1">
                        <path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                        <path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                        <path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                    </g>
                </svg>
            </div>
        </nav>
  )
}
