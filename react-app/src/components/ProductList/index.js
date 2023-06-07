import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import "./product.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser)
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
                <NavLink to={`/products/${product.id}`}>
                  <div className="imageWithFav">
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    <button>
                      <i className="fa-regular fa-heart fa-lg" />
                    </button>
                  </div>
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
                <NavLink to={`/products/${product.id}`}>
                  <div className="imageWithFav">
                    <img
                      className="product-image"
                      src={product.previewImage}
                      alt="products"
                    />
                    <button>
                      <i className="fa-regular fa-heart fa-lg" />
                    </button>
                  </div>
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
