import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../store/product";
import "./productdetails.css";

function ProductDetails(){
const dispatch = useDispatch();
const {productId} = useParams()
const product = useSelector((state) => state.products.singleProduct)
console.log("inside the single product detail", product.product)

useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

return (

 <div className="product-single">
    <h1>Product Details</h1>
 
    <div>{product.product?.name}</div>
    <img src={product.product?.previewImage} />
    <div>{product.product?.description}</div>
    <div>{product.product?.price}</div>
    <div>{product.product?.available}</div>
 

 </div>

)

}


export default ProductDetails;
