import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products";
import { useHistory } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteShoppingCart from "../../components/DeleteShoppingCart";
import { placeOrderThunk } from "../../store/session";
import { thunkUpdateCart } from "../../store/session";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const initialQuantities = sessionUser?.cart_session?.cart.map(
    (ele) => ele.quantity
  );
  const [quantities, setQuantities] = useState(initialQuantities);

  let title;
  if (sessionUser) {
    title = `${sessionUser.username}'s Shopping Cart`;
  } else {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);

    const cartItem = sessionUser.cart_session.cart[index];
    updateCartQuantity(cartItem.id, cartItem.product.id, newQuantity);
  };

  const updateCartQuantity = (cartId, productId, newQuantity) => {
    dispatch(thunkUpdateCart(sessionUser.id, cartId, productId, newQuantity));
  };

  const checkout = () => {
    // history.push("/")
    window.alert("Order Placed!");
    dispatch(placeOrderThunk(sessionUser.id));
  };

  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };
  const quantityOptions = [1, 2, 3, 4, 5];

  const calculateOverallTotal = () => {
    return sessionUser?.cart_session?.cart
      .reduce((total, ele, index) => {
        const itemTotal = calculateTotal(ele.product.price, quantities[index]);
        return total + parseInt(itemTotal);
      }, 0)
      .toFixed(2);
  };

  const calculateTotalItems = () => {
    return sessionUser?.cart_session?.cart.length;
  };

  return (
    <div className="bodyContainer">
      <h1>{title}</h1>
      <div className="cartpage">
        {/* <div> */}
        <div className="product-in-cartpage">
          {sessionUser?.cart_session?.cart.map((ele, index) => (
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
                <div className="quantity">
                  Quantity:
                  <select
                    value={quantities[index]}
                    onChange={(e) => {
                      // updateCartQuantity(ele.id, ele.product.id, quantities[index])
                      handleQuantityChange(index, e.target.value);
                    }}
                  >
                    {quantityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  Total: ${calculateTotal(ele.product.price, quantities[index])}
                </div>
              </div>
              <div className="delete-item-in-cart-btn">
                <OpenModalButton
                  buttonText="Delete Item"
                  modalComponent={
                    <DeleteShoppingCart
                      cartId={ele.id}
                      productId={ele.product.id}
                      sessionUserId={sessionUser.id}
                    />
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <div className="empty-cart">
          <h2
            className={
              sessionUser?.cart_session?.cart.length >= 1 ? "hidden" : ""
            }
          >
            Your cart is empty
          </h2>
          <div
            className={
              sessionUser?.cart_session?.cart.length >= 1 ? "hidden" : ""
            }
          >
            <NavLink exact to="/">
              Discover something unique to fill it up
            </NavLink>
          </div>
        </div>
        <div className="checkout">
          <div className="total-items">
            {calculateTotalItems()} item(s) in your cart
          </div>
          <div className="overall-total">
            <p>Item(s) total:</p> ${calculateOverallTotal()}
          </div>
          <button
            onClick={checkout}
            className={
              sessionUser?.cart_session?.cart.length >= 1
                ? "checkout-btn"
                : "checkout-btn hidden"
            }
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
