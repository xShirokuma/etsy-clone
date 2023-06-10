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
              {sessionUser.user_favorites.length ? (
              <div className="favorites">
              <NavLink exact to= "/favorites">
                <p>Favorites ↦</p>
                </NavLink>
                <div className="favorite-card-product">
                {sessionUser.user_favorites?.slice(-4).map((product) => (
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
                ) : (
                  <div className="start-shopping">Start shopping today!</div>
                )}
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bodyContainer">
          <div className="background">
          <div className="loggedout-welcome-title">
            <p>Welcome to </p>
            <h1>Shopsy</h1>
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
                  <div className="price" >$ {product.price.toFixed(2)}</div>
                  </NavLink>
                  <FavoriteIcon sessionUser={sessionUser} product={product} />
                </div>
                <NavLink to={`/products/${product.id}`}>
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
