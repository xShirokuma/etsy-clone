import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product.css";
import FavoriteIcon from "../FavoriteIcon"

const ProductList = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {sessionUser ? (
        <div className="bodyContainer">
          <div className="welcome-title">
            <h1>{`Welcome back, ${sessionUser.username}!`}</h1>
          </div>
          <div>
            <h3>
              Favorties
            </h3>
          </div>
          <div className="card-product">
            {products?.map((product) => (
              <div key={product.id}>
                  <div className="imageWithFav">
                    <NavLink to={`/products/${product.id}`}>
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    </NavLink>
                    <FavoriteIcon sessionUser={sessionUser} product={product}/>
                  </div>
                  <NavLink to={`/products/${product.id}`}>
                    <div>$ {product.price.toFixed(2)}</div>
                  </NavLink>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bodyContainer">
          <div className="welcome-title">
            <h1>Welcome to Esty</h1>
          </div>
          <div className="card-product">
            {products?.map((product) => (
              <div key={product.id}>
              <div className="imageWithFav">
                <NavLink to={`/products/${product.id}`}>
                <img
                  className="product-image"
                  src={product.previewImage}
                  alt="products"
                />
                </NavLink>
                <FavoriteIcon sessionUser={sessionUser} product={product}/>
              </div>
              <NavLink to={`/products/${product.id}`}>
                <div>$ {product.price.toFixed(2)}</div>
              </NavLink>
          </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
