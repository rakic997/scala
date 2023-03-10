import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

import Loader from '../components/ui/Loader'
import Button from '../components/ui/Button'
import Notificaiton from '../components/ui/Notification'

import starImage from '../assets/star.png'

import { useFetch } from '../hooks/useFetch'

export default function ProductDetails (): JSX.Element {
  const [isInCartNotify, setIsInCartNotify] = useState(false)
  const [isInWishlistNotify, setIsInWishlistNotify] = useState(false)
  const { id } = useParams()

  const {
    state: { cart, wish },
    dispatch
  } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`, id)

  const isInCart = cart.find((cartProduct: { id: number }) => cartProduct.id === product.id)
  const isInWishlist = wish.find((wishProduct: { id: number }) => wishProduct.id === product.id)

  function handleAddToCart (e: { stopPropagation: () => void }): void {
    e.stopPropagation()

    if (isInCart == null) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: product
      })
    } else {
      setIsInCartNotify(true)

      setTimeout(() => {
        setIsInCartNotify(false)
      }, 2000)
    }
  }

  function handleAddToWish (e: { stopPropagation: () => void }): void {
    e.stopPropagation()

    if (isInWishlist == null) {
      dispatch({
        type: 'ADD_TO_WISH',
        payload: product
      })
    } else {
      setIsInWishlistNotify(true)

      setTimeout(() => {
        setIsInWishlistNotify(false)
      }, 2000)
    }
  }

  return (
    <div className='product-details'>

      {isInCartNotify && <Notificaiton>
        <h6>Producut already in cart!</h6>
      </Notificaiton>}

      {isInWishlistNotify && <Notificaiton>
        <h6>Producut already in wishlist!</h6>
      </Notificaiton>}

      {(Boolean((error ?? false))) && <h1>Error</h1>}
      {loading && <Loader />}
      {(Boolean(product)) && <>
        <div className='product-details-image'>
          <img src={product?.image} alt="product" />
        </div>
        <div className='product-details-information'>
          <h6>{product?.category}</h6>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <div className='other'>
            <h4 className='rating'>
              <span>{product?.rating?.rate}</span>
              <span><img src={starImage} alt="star" /></span>
            </h4>
            <span className='price'>{product?.price}$</span>
          </div>

          <div className='product-options'>
            <Button className='btn btn-dark btn-size-xl' onClick={handleAddToCart}>
              <span>Add to cart</span>
            </Button>
            <Button className='wish-button' onClick={handleAddToWish}>
              <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="wish-icon">
                <path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
              </svg>
            </Button>
          </div>
        </div>
      </>}
    </div >
  )
}
