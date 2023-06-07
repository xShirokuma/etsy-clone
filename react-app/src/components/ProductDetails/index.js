import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import ImageCarousel from "./Carousel";
import { useHistory, Link } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteReview from "../../components/DeleteReview";
import PostReviewModal from "../../pages/PostReviewPage";
import EditReview from "../EditReview";

import "./productdetails.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  const reviewAvg = () => {
    let totalStars = 0;
    product.reviews.forEach((review) => {
      totalStars += review.stars;
    });
    const average = totalStars / product.reviews.length;
    return average.toFixed(1);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-single">
      <h1>Product Details</h1>
      <div>{product?.name}</div>
      <div>
        <ImageCarousel />
      </div>
      <h2>Description</h2>
      <div>{product?.description}</div>
      <div>${product?.price}</div>
      <div>Available:{product?.available}</div>
      <h2>Reviews</h2>
      {product?.reviews.length ? `${product.reviews.length} Review(s)` : "New"}
      {product?.reviews.length ? `⭐ ${reviewAvg()}` : ''}
      {product?.reviews.length ? (
        <div>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <div>{review.review}</div>
              <div>{review.stars}</div>
              {review.images.map((i) => (
                <div key={i.id}>
                  <img src={i.imageUrl} alt="Review Image" />
                </div>
              ))}
              <OpenModalButton
                buttonText="Edit"
                modalComponent={<EditReview productId={productId} review={review}/>}
              />
              <OpenModalButton
                buttonText="Delete"
                modalComponent={<DeleteReview productId={productId} reviewId={review.id}/>}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Post A Review</div>
      )}
      <div>
        {/* <Link product={product} onClick={(e)=>history.push(`/products/${productId}/review`)} >Post a review</Link> */}
        <OpenModalButton
          buttonText="Create"
          modalComponent={<PostReviewModal productId={productId} />}
        />
        {/* <button onClick={(e)=>history.push(`/products/${product.id}/delete`)} product={product}>Delete a review</button> */}

      </div>
    </div>
  );
};

export default ProductDetails;
