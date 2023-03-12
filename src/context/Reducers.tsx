import type IProduct from '../types/types'

enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
  ADD_TO_WISH = 'ADD_TO_WISH',
  DELETE_FROM_WISH = 'DELETE_FROM_WISH',
}

interface stateProps {
  cart: IProduct[]
  wish: IProduct[]
  cartError: boolean
  wished: boolean
}

interface actionProps {
  type: ActionType
  payload: any
}

export const cartReducer = (state: stateProps, action: actionProps): { wished: any, cart: IProduct[], wish: IProduct[], cartError: boolean } => {
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
    default:
      return state
  }
}
