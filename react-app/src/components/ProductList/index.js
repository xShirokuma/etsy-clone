import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => (state.products)));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="card-product">
      {products?.map((product) => (
        <div key={product.id}>
          <NavLink to={`/products/${product.id}`}>
            <img
              className="product-image"
              src={product.previewImage}
              alt="products"
            />
            <div>$ {product.price}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
