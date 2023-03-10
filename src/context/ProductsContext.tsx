import React, { useState, useEffect, useContext, createContext } from 'react'

interface ProductsContextType {
  categories: string[]
  category: string | undefined
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const ProductsContext = createContext<ProductsContextType>({
  categories: [],
  category: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCategory: () => { }
})

export const ProductsProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    async function getCategories (): Promise<void> {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      setCategories(data)
    }

    void getCategories()
  }, [])

  const values = {
    categories,
    setCategories,
    category,
    setCategory
  }

  return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
  )
}

export const useProducts = (): ProductsContextType => useContext(ProductsContext)
