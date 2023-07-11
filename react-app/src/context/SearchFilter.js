import { useState, createContext, useEffect } from "react"
import { useSelector } from "react-redux"

export const SearchContext = createContext()

export const SearchFilter = (props) => {
  const state = useSelector((state) => state)
  const products = Object.values(state.products)

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (filteredProducts.length === 0) setFilteredProducts(products)
  }, [filteredProducts.length, products])

  console.log(filteredProducts)

  return (
    <SearchContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
      }}>
      {props.children}
    </SearchContext.Provider>
  )
}
