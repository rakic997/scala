import React, { useState, useRef } from 'react'
import { useCart } from '../context/CartContext'
import useOutsideClick from '../hooks/useOutsideClick'
import type IProduct from '../types/types'

import Product from './Product'

export default function Wishlist (): JSX.Element {
  const [isWish, setIsWish] = useState(false)
  const { state } = useCart()
  const ref = useRef<HTMLInputElement>(null)

  function handleToggle (): void {
    setIsWish(!isWish)
  }

  useOutsideClick(ref, () => {
    setIsWish(false)
  })

  return (
        <div className='wishlist' onClick={handleToggle} ref={ref}>

            <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className='wish-icon'>
                <g>
                    <g id="Icon-Heart" transform="translate(178.000000, 230.000000)">
                        <path d="M-146-177.1l-0.8-0.7c-18.2-14.8-23.1-20-23.1-28.5c0-7,5.7-12.6,12.6-12.6 c5.8,0,9.1,3.3,11.3,5.8c2.2-2.5,5.5-5.8,11.3-5.8c7,0,12.6,5.7,12.6,12.6c0,8.5-4.9,13.7-23.1,28.5L-146-177.1L-146-177.1z M-157.3-216.3c-5.5,0-10,4.5-10,10c0,7.3,4.6,12.1,21.3,25.8c16.7-13.7,21.3-18.5,21.3-25.8c0-5.5-4.5-10-10-10 c-5,0-7.7,3-9.8,5.4l-1.5,1.7l-1.5-1.7C-149.6-213.3-152.3-216.3-157.3-216.3L-157.3-216.3z" id="Fill-18" />
                    </g>
                </g>
            </svg>

            {state.wish.length > 0 && <span className='product-counter wish-product-counter'>{state.wish.length}</span>}

            <div className={isWish ? 'wishlist-content open' : 'wishlist-content'}>
                {state.wish.length > 0
                  ? state.wish.map((product: IProduct) => (
                            <div className='cart-item' key={product.id}>
                                <Product
                                    product={product}
                                    isWish={isWish}
                                />
                            </div>
                  ))
                  : <div className='wish-notify'>
                        <div className='wish-notify-content'>
                            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="wish-icon">
                                <path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
                            </svg>
                            <h6>Your wishlist is empty</h6>
                        </div>
                    </div>
                }
            </div>
        </div>
  )
}
