import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import { ProductList } from "../../components"
import "./HomePage.css"

const HomePage = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
  <div className="home">
    <ProductList products={products}/>
  </div>
  )
}

export default HomePage