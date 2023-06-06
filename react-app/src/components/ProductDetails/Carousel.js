import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./productdetails.css";


const ImageCarousel = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
      <Carousel className="image-carousel">
        {product?.images.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt={product.name} height='300px'/>
          </div>
        ))}
      </Carousel>
  );
};

export default ImageCarousel;
