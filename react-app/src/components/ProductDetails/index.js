import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import ImageCarousel from "./Carousel";
import { useHistory, Link, useParams } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteReview from "../../components/DeleteReview";
import PostReviewModal from "../../pages/PostReviewPage";
import EditReview from "../EditReview";

import "./productdetails.css";
import { thunkAddToCart, thunkUpdateCart } from "../../store/session";
import FavoriteIcon from "../FavoriteIcon";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const sessionUser = useSelector((state) => state.session.user);
 
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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let value = 1;
  const itemquantity = () => {
    value = document.getElementById("itemquantity").value;
    console.log("value:", value)
  }
  
  const addToCart = async () => {
    let checkproduct;

    if(!sessionUser){
      window.alert("Please log in first")
    }else{
      console.log("checkproduct:", sessionUser)
      checkproduct = sessionUser.cart_session.cart.find(ele=>ele.productId == product.id)

      if(!checkproduct){
        dispatch(thunkAddToCart(sessionUser, product, value))
        .then(history.push("/shoppingcart"))
      }else if(checkproduct){
        value = parseInt(parseInt(value) + checkproduct.quantity)
        let cartId = checkproduct.id
        console.log("valuesssss:", value)
        dispatch(thunkUpdateCart(sessionUser, cartId, product, value))
        .then(history.push("/shoppingcart"))
      }
    }
  }

  return (
    <div className="product-single">
      <div className="product-container">
        <div>
          <ImageCarousel />
        </div>
        <div className="product-info">
          {product?.name}
          Available:{product?.available}${product?.price.toFixed(2)}
          <h2>Description</h2>
          {product?.description}
          <div className="add-to-cart">
            <label>Quantity</label>
            <select name="quantity" placeholder="Quantity" id="itemquantity" onChange={itemquantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div>
              <button onClick={addToCart} className="add-to-cart-button">Add to Cart</button>
            </div>
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
      <h2>Reviews</h2>
      {product?.reviews.length ? `${product.reviews.length} Review(s)` : "New"}
      {product?.reviews.length ? `⭐ ${reviewAvg()}` : ""}
      {product?.reviews.length ? (
        <div>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <div>{review.review}</div>
              <div>{review.stars}</div>
              {review.images.map((i) => (
                <div key={i.id} className={i.imageUrl? "":"hidden"}>
                  <img src={i.imageUrl} alt="Review Image" />
                </div>
              ))}
              {sessionUser && review?.userId === sessionUser.id && (
                <div>
                  <OpenModalButton
                    buttonText="Edit"
                    modalComponent={
                      <EditReview productId={productId} review={review} />
                    }
                  />
                  <OpenModalButton
                    buttonText="Delete"
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
          ))}
        </div>
      ) : (
        <div>Post A Review</div>
      )}
      <div>
        {/* <Link product={product} onClick={(e)=>history.push(`/products/${productId}/review`)} >Post a review</Link> */}
        {sessionUser && sessionUser.id !== product?.userId && !reviewExists && (
          <OpenModalButton
            buttonText="Create"
            modalComponent={<PostReviewModal productId={productId} />}
          />
        )}
        {/* <button onClick={(e)=>history.push(`/products/${product.id}/delete`)} product={product}>Delete a review</button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
