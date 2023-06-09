import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import "./ShoppingCartPage.css"

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    let title;
    if (sessionUser) {
        title = `${sessionUser.username}'s Shopping Cart`
    }else {
        history.push("/")
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="bodyContainer">
            <h1>{title}</h1>
            <div className="cartpage">
            {sessionUser?.cart_session?.cart.map((ele) => (
                  <div key={ele.product.id}>
                    <div>
                      <NavLink to={`/products/${ele.product.id}`}>
                        <img
                          className="product-image"
                          src={ele.product.previewImage}
                          alt="products"
                        />
                      {/* <div className="price">$ {ele.product.price.toFixed(2)}</div> */}
                      </NavLink>
                      <div>$ {ele.product.price.toFixed(2)}</div>
                      <div>quantity: {ele.quantity}</div>
                      
                      <button>Remove item from your cart</button>
                      {/* <FavoriteIcon
                        sessionUser={sessionUser}
                        product={product}
                      /> */}
                    </div>
                  </div>
                ))}
            </div>
            <button>Proceed to checkout</button>
        </div> 
        
    )
}

export default ShoppingCartPage