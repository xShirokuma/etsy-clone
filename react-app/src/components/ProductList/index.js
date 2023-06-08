import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product.css";
import FavoriteIcon from "../FavoriteIcon";

const ProductList = ({products}) => {

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      {sessionUser ? (
        <div className="bodyContainer">
          <div className="background">
            <div className="homepage-header">
              <div className="welcome-title">
                <p>{`Welcome back, ${sessionUser.username}!`}</p>
              </div>
              <div className="favorites">
              <NavLink exact to= "/favorites">
                <p>Favorties ↦</p>
                </NavLink>
                <div className="favorite-card-product">
                {products?.map((product) => (
                  <div key={product.id}>
                    <div className="fav-imageWithFav">
                      <NavLink to={`/products/${product.id}`}>
                        <img
                          className="product-image"
                          src={product.previewImage}
                          alt="products"
                        />
                      <div className="price">$ {product.price.toFixed(2)}</div>
                      </NavLink>
                      <FavoriteIcon
                        sessionUser={sessionUser}
                        product={product}
                      />
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
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
                    <div className="price">$ {product.price.toFixed(2)}</div>
                  </NavLink>
                  <FavoriteIcon sessionUser={sessionUser} product={product} />
                </div>
                {/* <NavLink to={`/products/${product.id}`}>
                </NavLink> */}
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
                  <FavoriteIcon sessionUser={sessionUser} product={product} />
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
