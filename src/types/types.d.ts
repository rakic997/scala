export default interface IProduct {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
  rating: IRating
}

interface IRating {
  rate: number
  count: number
}
