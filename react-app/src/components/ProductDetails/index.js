import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import ImageCarousel from "./Carousel";
import { useHistory, Link } from "react-router-dom";
import OpenModalButton from "../../components/OpenModalButton";
import DeleteReview from "../../components/DeleteProduct";
import PostReviewModal from "../../pages/PostReviewPage";
import "./productdetails.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector((state) => state?.products[productId]);

  const reviewAvg = () => {
    let totalStars = 0;
    product.reviews.forEach(review => {
      totalStars += review.stars
    })
    const average = totalStars / product.reviews.length
    return average.toFixed(1)
  }

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
      {product?.reviews?.map((r) => {
        return (
          <div>
            {product.reviews.length ? `${product.reviews.length} Review(s)` : "New"}
            {`⭐ ${reviewAvg()}`}
            {product?.reviews?.map((r) => {
              return (
                <div key={r.id}>
                  <div>{r.review}</div>
                  <div>{r.stars}</div>
                  {r.images.map((i) => {
                    return (
                      <div key={i.id}>
                        <img src={i.imageUrl} alt="Review Image" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}

      <div>
        {/* <Link product={product} onClick={(e)=>history.push(`/products/${productId}/review`)} >Post a review</Link> */}
        <OpenModalButton
          buttonText="Create"
          modalComponent={<PostReviewModal productId={productId} />}
        />
        {/* <button onClick={(e)=>history.push(`/products/${product.id}/delete`)} product={product}>Delete a review</button> */}
        <OpenModalButton
          buttonText="Delete"
          modalComponent={<DeleteReview product={product} />}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
