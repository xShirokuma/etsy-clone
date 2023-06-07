import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products"
import { useHistory } from "react-router-dom";
import OpenModalButton from '../../components/OpenModalButton'
import DeleteProduct from '../../components/DeleteProduct'
import "./FavoritePage.css"

const FavoritePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    
    if(!sessionUser){
        history.push("/")
    }

    // const products = Object.values(useSelector((state) => (state.)));

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
            <h1>{sessionUser?.username}'s Favorites</h1>
        </div>
        
    )
}

export default FavoritePage