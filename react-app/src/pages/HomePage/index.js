import React, { useContext, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../store/products"
import { ProductList } from "../../components"
import "./HomePage.css"
import { SearchContext } from "../../context/SearchFilter"

const HomePage = () => {
  const dispatch = useDispatch()
  const { filteredProducts } = useContext(SearchContext)
  console.log(filteredProducts)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="home">
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default HomePage
