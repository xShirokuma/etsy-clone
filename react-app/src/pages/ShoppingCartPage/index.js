import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import "./ShoppingCartPage.css"
import DeleteShoppingCart from "../../components/DeleteShoppingCart";
import { placeOrderThunk } from "../../store/session";

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

    const checkout = () => {
      // history.push("/")
      window.alert("Order Placed!")
      dispatch(placeOrderThunk(sessionUser.id))
    }

    return (
        <div className="bodyContainer">
          <div className="cartpage">
            <h1>{title}</h1>
            <div className="product-in-cartpage">
              {sessionUser?.cart_session?.cart.map((ele) => (
                <div key={ele.product.id} className="item-in-shop">
                    <NavLink to={`/products/${ele.product.id}`}>
                        <img
                          className="product-image"
                          src={ele.product.previewImage}
                          alt="products"
                        />
                      {/* <div className="price">$ {ele.product.price.toFixed(2)}</div> */}
                    </NavLink>
                    <div className="item-in-shop-info">
                      <div>Product: {ele.product.name}</div>
                      <div>Price: $ {ele.product.price.toFixed(2)}</div>
                      <div>Quantity: {ele.quantity}</div>
                      <div>Total: $ {ele.product.price.toFixed(2) * ele.quantity}</div>
                    </div>
                    <div className="delete-item-in-cart-btn">
                      <OpenModalButton
                    buttonText="Delete Item"
                    modalComponent={
                      <DeleteShoppingCart
                        cartId={ele.id}
                        productId={ele.product.id}
                        sessionuserId={sessionUser.id}
                      />
                    }
                    />
                    </div>
                    </div>
                ))}
            </div>
          </div>
            
            <div className="empty-cart">
              <h2 className={sessionUser?.cart_session?.cart.length >= 1? "hidden":""}>
                Your cart is empty
              </h2>
              <div className={sessionUser?.cart_session?.cart.length >= 1? "hidden":""}>
                <NavLink exact to="/" >
                  Discover something unique to fill it up
                </NavLink>
              </div >
            </div>
            <button onClick={checkout} 
              className={sessionUser?.cart_session?.cart.length >= 1? "checkout-btn":"checkout-btn hidden"}>
                Proceed to checkout
            </button>
        </div> 
        
    )
}

export default ShoppingCartPage
