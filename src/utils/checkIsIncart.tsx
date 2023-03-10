import { useCart } from '../context/CartContext'

const {
  state: { cart }
} = useCart()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function checkIsInCart (id: number) {
  const isInCart = cart.find((cartProduct) => cartProduct.id === id)
  return isInCart
}
