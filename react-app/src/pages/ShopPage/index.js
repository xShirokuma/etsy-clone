import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "./ShopPage.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from '../../components/OpenModalButton'
import DeleteProduct from '../../components/DeleteProduct'

const ShopPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser){
        history.push("/")
    }

    const products = Object.values(useSelector((state) => (state.products)));

    let sessionUserProducts = []
    for (let product of products) {
        if(product.userId === sessionUser?.id){
            sessionUserProducts.push(product)
        }
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="bodyContainer">
            <div className="shoppage">
                <div className="shoppage-title">
                    <div>
                      <h1>{sessionUser?.username}'s Shop</h1>
                        {sessionUserProducts.length > 0 ?
                        (<h3>You have {sessionUserProducts?.length} items in your shop</h3>)
                        :(<h3>Your shop is empty, add a product to start your business.</h3>)}
                    </div>
                    <button onClick={(e)=>history.push("/products/new")}>Add New Product to Shop</button>
                </div>
                <div className="product-in-shop">
                {sessionUserProducts?.map((product) => (
                <div key={product.id} className="item-in-shop">
                    <NavLink to={`/products/${product.id}`}>
                        <img
                            className="product-image"
                            src={product.previewImage}
                            alt="products"
                        />
                    </NavLink>
                    <div className="item-in-shop-info">
                        <div>Product name: {product.name}</div>
                        <div>Description: {product.description}</div>
                        <div>Price listed: $ {product.price.toFixed(2)}</div>
                    </div>
                    <div className="item-in-shop-button">
                        <button onClick={(e)=>history.push(`/products/${product.id}/edit`)} id="edit-product">Edit Product Details</button>
                        <OpenModalButton
                            buttonText="Delete Product" modalComponent={<DeleteProduct productId={product.id} />}
                        />
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ShopPage
