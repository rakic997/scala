import React, { useState, useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import Product from '../components/Product'
import Notification from './ui/Notification'
import useOutsideClick from '../hooks/useOutsideClick'
import type IProduct from '../types/types'
import Button from './ui/Button'

export default function Cart (): JSX.Element {
  const [total, setTotal] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [isBoughtNotify, setIsBoughtNotify] = useState(false)
  const [isLoggedNotify, setIsLoggedNotify] = useState(false)
  const {
    state: { cart },
    dispatch
  } = useCart()
  const ref = useRef<HTMLInputElement>(null)
  const isCart = true

  useEffect(() => {
    function handleTotalPrice (): void {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const total = cart.reduce((accumulator: number, product: any) => accumulator + product.price, 0).toFixed(2)
      setTotal(total)
    }

    handleTotalPrice()
  }, [cart])

  function handleClearCart (): void {
    dispatch({
      type: 'CLEAR_CART'
    })
    setTotal('')
  }

  function handleCartToggle (): void {
    setIsShown(prevIsShown => !prevIsShown)
  }

  function handleCheckout (): void {
    const isLogged = localStorage.getItem('token')

    if (isLogged != null) {
      setIsBoughtNotify(true)

      setTimeout(() => {
        setIsBoughtNotify(false)
      }, 2000)
    } else {
      setIsLoggedNotify(true)

      setTimeout(() => {
        setIsLoggedNotify(false)
      }, 2000)
    }
  }

  useOutsideClick(ref, () => {
    setIsShown(false)
  })

  return (
    <div className="cart" ref={ref}>

      {isBoughtNotify && <Notification>
        <h6>You succsesifully bought <span>{cart.length}</span> products for <span>{total}$</span></h6>
      </Notification>}

      {isLoggedNotify && <Notification>
        <h6>To checkout, you need first to log in into your account!</h6>
      </Notification>}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cart-icon" onClick={handleCartToggle}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>

      {cart.length > 0 && <span className='product-counter cart-product-counter'>{cart.length}</span>}

      <div className={isShown ? 'cart-content open' : 'cart-content'}>
        <div className='cart-header'>
          <div className='cart-info'>
            <h2>My cart</h2>
            <span>({cart.length > 0 ? cart.length : 0}) items</span>
          </div>
          <div className='cart-options'>
            <Button
              className={cart.length === 0 ? 'btn btn-light btn-size-md disabled' : 'btn btn-light btn-size-md'}
              onClick={handleClearCart}>
              <span>Clear cart</span>
            </Button>
            <Button
              className='btn btn-light btn-size-md'
              onClick={handleCartToggle}>
              <span>Close cart</span>
            </Button>
          </div>
        </div>

        <div className='cart-body'>
          {cart.length > 0
            ? cart.map((product: IProduct) => (
              <div className='cart-item' key={product.id}>
                <Product
                  product={product}
                  isCart={isCart}
                />
              </div>
            ))
            : <div className='empty-notify'>
              <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24">
                <title />
                <path d="M16,5.2H10V6.8h6ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z" />
              </svg>
              <h6>Your cart is empty</h6>
            </div>}
        </div>

        <div className='cart-footer'>
          <div className='ammount'>
            <h6 className='total'>Subtotal ammount</h6>
            <h3>{(total.length > 0) ? total : 0}$</h3>
          </div>
          <div className='checkout'>
            <Button className={cart.length === 0 ? 'btn btn-light btn-size-lg disabled' : 'btn btn-light btn-size-lg'} onClick={handleCheckout}>
              <span>Checkout</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
