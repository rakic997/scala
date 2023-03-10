import React, { useReducer, useContext, createContext } from 'react'
import type IProduct from '../types/types'
import { cartReducer } from './Reducers'

interface InitialStateType {
  cart: IProduct[]
  wish: IProduct[]
  wished: boolean
  cartError: boolean
}

const InitialState = {
  cart: [],
  wish: [],
  wished: false,
  cartError: false
}

const CartContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<any>
}>({
  state: InitialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => { }
})

export const CartProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, InitialState)

  const values = {
    state,
    dispatch
  }

  return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
  )
}

export const useCart = (): { state: InitialStateType, dispatch: React.Dispatch<any> } => useContext(CartContext)
