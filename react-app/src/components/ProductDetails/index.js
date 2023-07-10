import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import ImageCarousel from "./Carousel";
import { useHistory, Link, useParams } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteReview from "../../components/DeleteReview";
import PostReviewModal from "../../pages/PostReviewPage";
import EditReview from "../EditReview";
import LoginFormModal from "../LoginFormModal";

import "./productdetails.css";
import { thunkAddToCart, thunkUpdateCart } from "../../store/session";
import FavoriteIcon from "../FavoriteIcon";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ulRef = useRef();

  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const sessionUser = useSelector((state) => state.session.user);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const reviewAvg = () => {
    let totalStars = 0;
    product.reviews.forEach((review) => {
      totalStars += review.stars;
    });
    const average = totalStars / product.reviews.length;
    return average.toFixed(1);
  };

  let reviewExists = false;
  if (product?.reviews.length) {
    for (let i = 0; i < product.reviews.length; i++) {
      if (product.reviews[i]?.userId === sessionUser?.id) {
        reviewExists = true;
      }
    }
  }

  const reviewsLength = () => {
    if (product?.reviews.length) {
      if (product?.reviews.length === 1) {
        return `${product.reviews.length} Review`;
      } else if (product?.reviews.length > 1) {
        return `${product.reviews.length} Reviews`;
      }
    }
    return "New";
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let value = 1;
  const itemquantity = () => {
    value = document.getElementById("itemquantity").value;
    console.log("value:", value);
  };

  const addToCart = async () => {
    let checkproduct;

    checkproduct = sessionUser.cart_session.cart.find(
      (ele) => ele.productId == product.id
    );

    if (!checkproduct) {
      await dispatch(thunkAddToCart(sessionUser, product, value));
      history.push("/shoppingcart");
    } else if (checkproduct) {
      value = parseInt(parseInt(value) + checkproduct.quantity);
      let cartId = checkproduct.id;
      dispatch(thunkUpdateCart(sessionUser, cartId, product, value)).then(
        history.push("/shoppingcart")
      );
    }
  };

  return (
    <div className="product-single">
      <div className="product-container">
        <div>
          <ImageCarousel />
        </div>
        <div className="reviews">
          <div>
            <h2>Reviews</h2>
          </div>
          <div className="total-reviews">
            {reviewsLength()}
            {product?.reviews.length ? ` ⭐ ${reviewAvg()}` : ""}
          </div>
          <div className="create-review-button">
            {sessionUser &&
              sessionUser.id !== product?.userId &&
              !reviewExists && (
                <OpenModalButton
                  buttonText="Post Review"
                  modalComponent={<PostReviewModal productId={productId} />}
                />
              )}
          </div>
          {product?.reviews.length ? (
            <div className="review-map">
              {product.reviews.map((review) => (
                <div key={review.id}>
                  <div className="review">{review.review}</div>
                  <div className="name-date">
                    {review.user?.username} · {review.createdAt}
                  </div>
                  <div>{review.stars.toFixed(1)} ⭐</div>
                  <div className="review-images">
                    {review.images.map((i) => (
                      <div key={i.id} className={i.imageUrl ? "" : "hidden"}>
                        <img src={i.imageUrl} alt="ReviewImage" />
                      </div>
                    ))}
                  </div>
                  <div className="border">
                    {sessionUser && review?.userId === sessionUser.id && (
                      <div className="review-btn">
                        <OpenModalButton
                          buttonText="Edit Review"
                          modalComponent={
                            <EditReview productId={productId} review={review} />
                          }
                        />
                        <OpenModalButton
                          buttonText="Delete Review"
                          modalComponent={
                            <DeleteReview
                              productId={productId}
                              reviewId={review.id}
                            />
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Be the first to post a review!</div>
          )}
        </div>
      </div>
      <div className="product-info">
        <p className="price-detail">${product?.price.toFixed(2)}</p>
        <h2>{product?.name}</h2>
        <div className="available">Available: {product?.available}</div>
        <div className="product-info-description">
          <h3>Description</h3>
          <div className="description">{product?.description}</div>
        </div>
        <div className="add-to-cart">
          <div>
            <label>Quantity</label>
          </div>
          <select
            name="quantity"
            placeholder="Quantity"
            id="itemquantity"
            onChange={itemquantity}
          >
            {/* <option value="" disabled selected>Select quantity</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {!sessionUser ? (
            <div className="cart-button">
              <OpenModalButton
                buttonText={<p className="add-to-cart-button">Add to Cart</p>}
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </div>
          ) : (
            <div className="cart-button">
              <button onClick={addToCart} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          )}

          <div className="fav-in-page-detail">
            <FavoriteIcon
              sessionUser={sessionUser}
              product={product}
              onpagedetails={"YES"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
