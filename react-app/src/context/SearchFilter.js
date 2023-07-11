import { useState, createContext, useEffect } from "react"
import { useSelector } from "react-redux"

export const SearchContext = createContext()

export const SearchFilter = (props) => {
  const state = useSelector((state) => state)
  const products = Object.values(state.products)

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)

  console.log(`prods: ${products}`)
  console.log(`filteredProducts ${filteredProducts}`)
  console.log(filteredProducts.length)

  useEffect(() => {
    setFilteredProducts(products)
  }, [products.length])

  return (
    <SearchContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        searchQuery,
        setSearchQuery,
      }}>
      {props.children}
    </SearchContext.Provider>
  )
}
