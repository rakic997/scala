import React, { useState } from 'react'
import type IProduct from '../types/types'
import { useCart } from '../context/CartContext'

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'

import Button from './ui/Button'

interface ProductProps {
  product: IProduct
  isCart?: boolean
  isWish?: boolean
}

export default function Product ({ product, isCart, isWish }: ProductProps): JSX.Element {
  const [wishIcon, setWishIcon] = useState(false)
  const { image, category, title, description, price } = product

  const {
    state: { cart, wish },
    dispatch
  } = useCart()

  const isInCart = cart.find(({ id }) => id === product.id)
  const isInWishlist = wish.find(({ id }) => id === product.id)
  const isNotInCartOrWish = !(isCart ?? false) && !(isWish ?? false)

  function handleEnter (): void {
    if (isNotInCartOrWish) {
      setWishIcon(true)
    }
  }

  function handleLeave (): void {
    if (isNotInCartOrWish) {
      setWishIcon(false)
    }
  }

  function handleAddToCart (e: { stopPropagation: () => void, preventDefault: () => void }): void {
    e.stopPropagation()
    e.preventDefault()

    if (isInCart == null) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: product
      })
    }
  }

  function handleAddToWish (e: { preventDefault: () => void }): void {
    e.preventDefault()
    dispatch({
      type: 'ADD_TO_WISH',
      payload: product
    })
  }

  function handleDelete (e: { stopPropagation: () => void, preventDefault: () => void }): void {
    e.stopPropagation()
    e.preventDefault()

    if (isCart ?? false) {
      dispatch({
        type: 'DELETE_FROM_CART',
        payload: product
      })
    } else {
      dispatch({
        type: 'DELETE_FROM_WISH',
        payload: product
      })
    }
  }

  return (
    <article className='product' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

      <div className='product-inner'>
        <div className='product-header'>
          <img src={image} alt="product" />
        </div>
        <div className='product-body'>
          <h4>{capitalizeFirstLetter(category)}</h4>
          <h6>{title}</h6>
          <p>{description}...</p>
        </div>
        <div className='product-footer'>
          <span className='price'>${price}</span>
          {!(isCart ?? false) &&
            <Button className='btn btn-dark btn-size-md' onClick={handleAddToCart}>
              <>
                <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" className='cart-icon'>
                  < g >
                    <path d="M56.262,17.837H26.748c-0.961,0-1.508,0.743-1.223,1.661l4.669,13.677c0.23,0.738,1.044,1.336,1.817,1.336h19.35   c0.773,0,1.586-0.598,1.815-1.336l4.069-14C57.476,18.437,57.036,17.837,56.262,17.837z" />
                    <circle cx="29.417" cy="50.267" r="4.415" />
                    <circle cx="48.099" cy="50.323" r="4.415" />
                    <path d="M53.4,39.004H27.579L17.242,9.261H9.193c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h4.493l10.337,29.743H53.4   c1.381,0,2.5-1.119,2.5-2.5S54.781,39.004,53.4,39.004z" />
                  </g><g /><g /><g /><g /><g /><g />
                </svg>
                <span>Add</span>
              </>
            </Button>}
        </div>

        {((isCart ?? false) || (isWish ?? false)) &&
          <Button className='delete' onClick={handleDelete}><span>X</span></Button>}

        {wishIcon &&
          <Button className='wish-icon-container' onClick={handleAddToWish}>
            <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className='wish-icon'>
              <g>
                <g id="Icon-Heart" transform="translate(178.000000, 230.000000)">
                  <path d="M-146-177.1l-0.8-0.7c-18.2-14.8-23.1-20-23.1-28.5c0-7,5.7-12.6,12.6-12.6 c5.8,0,9.1,3.3,11.3,5.8c2.2-2.5,5.5-5.8,11.3-5.8c7,0,12.6,5.7,12.6,12.6c0,8.5-4.9,13.7-23.1,28.5L-146-177.1L-146-177.1z M-157.3-216.3c-5.5,0-10,4.5-10,10c0,7.3,4.6,12.1,21.3,25.8c16.7-13.7,21.3-18.5,21.3-25.8c0-5.5-4.5-10-10-10 c-5,0-7.7,3-9.8,5.4l-1.5,1.7l-1.5-1.7C-149.6-213.3-152.3-216.3-157.3-216.3L-157.3-216.3z" id="Fill-18" />
                </g>
              </g>
            </svg>
          </Button>}

        {(isInWishlist != null) &&
          (!(isWish ?? false) && !(isCart ?? false)) && <Button className='wish-icon-container wished' onClick={handleDelete}>
            <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='wish-icon'>
              <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
            </svg>
          </Button>}
      </div>
    </article>
  )
}
