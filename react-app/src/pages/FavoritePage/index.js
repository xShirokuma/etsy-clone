import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FavoriteIcon } from "../../components";
import "./FavoritePage.css"

const FavoritePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    
    if(!sessionUser){
        history.push("/")
    }

    return (
        <div className="bodyContainer">
            <h2><i className="fa-regular fa-circle-user" /> {sessionUser?.username}</h2>
            <h3>Favorite items:   {sessionUser?.user_favorites?.length} items</h3>
            <div className="favoritesContainer">
            {sessionUser.user_favorites?.map((product) => (
                <div key={product.id}>
                    <div className="fav-imageWithFav">
                        <NavLink to={`/products/${product.id}`}>
                            <img
                            className="product-image"
                            src={product.previewImage}
                            alt="products"
                            />
                            <div className="price">$ {product.price.toFixed(2)}</div>
                        </NavLink>
                    <FavoriteIcon
                        sessionUser={sessionUser}
                        product={product}
                    />
                    </div>
                </div>
            ))}
            </div>
        </div>
        
    )
}

export default FavoritePage