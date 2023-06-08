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
        <div className="shoppage">
            <h1>{sessionUser?.username}'s Shop</h1>
            <button onClick={(e)=>history.push("/products/new")}>Add New Product</button>

            <div className="card-product">
            {sessionUserProducts?.map((product) => (
                <div key={product.id}>
                <NavLink to={`/products/${product.id}`}>
                <img
                    className="product-image"
                    src={product.previewImage}
                    alt="products"
                />
                <div>$ {product.price.toFixed(2)}</div>
                </NavLink>
                <div>
                    <button onClick={(e)=>history.push(`/products/${product.id}/edit`)}>Edit Product</button>
                    {/* <button onClick={(e)=>history.push(`/products/${product.id}/`)}>Delete Product</button> */}
                    <OpenModalButton
                             buttonText="Delete" modalComponent={<DeleteProduct productId={product.id} />}
                             />
                </div>
            </div>
            ))}
            </div>
        </div>

    )
}

export default ShopPage
