import type IProduct from '../types/types'

interface stateProps {
  cart: any[]
  wish: any[]
  cartError: boolean
  wished: boolean
}

interface actionProps {
  type: any
  payload: any
}

export const cartReducer = (state: stateProps, action: actionProps): { wished: any, cart: any[], wish: any[], cartError: boolean } => {
  switch (action.type) {
    case 'ADD_TO_CART':

      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload }
        ]
      }

    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((cartProduct: IProduct) => cartProduct.id !== action.payload.id)
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    case 'ADD_TO_WISH':
      return {
        ...state,
        wish: [
          ...state.wish,
          { ...action.payload }
        ]
      }
    case 'DELETE_FROM_WISH':
      return {
        ...state,
        wish: state.wish.filter((wishProduct: IProduct) => wishProduct.id !== action.payload.id)
      }
    case 'IS_ADDED_TO_WISH':
      return {
        ...state,
        wished: state.wish.find((wishProduct: IProduct) => wishProduct.id === action.payload.id)
      }
    default:
      return state
  }
}
