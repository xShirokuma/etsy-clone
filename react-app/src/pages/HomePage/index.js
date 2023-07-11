import React, { useContext } from "react"
import { ProductList } from "../../components"
import "./HomePage.css"
import { SearchContext } from "../../context/SearchFilter"

const HomePage = () => {
  const { filteredProducts } = useContext(SearchContext)

  return (
    <div className="home">
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default HomePage
