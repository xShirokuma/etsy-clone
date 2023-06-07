import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import ImageCarousel from "./Carousel";
import { useHistory } from "react-router-dom";
import OpenModalButton from '../../components/OpenModalButton'
import DeleteReview from '../../components/DeleteProduct'
import "./productdetails.css";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {productId} = useParams()
  const product = (useSelector((state) => state.products[productId]))

  useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  return (
    <div className="product-single">
        <h1>Product Details</h1>
        <div>{product?.name}</div>
        {/* <img src={product?.previewImage} /> */}
        <div>
          <ImageCarousel />
        </div>
        <div>{product?.description}</div>
        <div>{product?.price}</div>
        <div>{product?.available}</div>

        <div>
            <button onClick={(e)=>history.push(`/products/${product.id}/review`)} product={product}>Post a review</button>
            {/* <button onClick={(e)=>history.push(`/products/${product.id}/delete`)} product={product}>Delete a review</button> */}
            <OpenModalButton 
                             buttonText="Delete" modalComponent={<DeleteReview product={product} />} 
                             /> 
        </div>
    </div>
  )
}

export default ProductDetails;
