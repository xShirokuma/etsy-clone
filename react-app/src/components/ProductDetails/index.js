import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/product";
import "./productdetails.css";

function ProductDetails(){
const dispatch = useDispatch();
const {productId} = useParams()
const product = (useSelector((state) => state.productsReducer[productId]))

useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

return (

 <div className="product-single">
    <h1>Product Details</h1>
 
    <div>{product?.name}</div>
    <img src={product?.previewImage} />
    <div>{product?.description}</div>
    <div>{product?.price}</div>
    <div>{product?.available}</div>
 

 </div>

)

}


export default ProductDetails;
