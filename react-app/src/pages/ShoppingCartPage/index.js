import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from '../../components/OpenModalButton'
import DeleteProduct from '../../components/DeleteProduct'
import "./ShoppingCartPage.css"

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    let title;
    if (sessionUser) {
        title = `${sessionUser.username}'s Shopping Cart`
    }else {
        title = "Visitor's Shopping Cart"
    }
    // let sessionUserProducts = []
    // for (let product of products) {
    //     if(product.userId === sessionUser?.id){
    //         sessionUserProducts.push(product)
    //     }
    // }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <h1>{title}</h1>
        </div> 
        
    )
}

export default ShoppingCartPage