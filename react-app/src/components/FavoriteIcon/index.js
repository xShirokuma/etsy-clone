import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { thunkAddFav, thunkDeleteFav } from "../../store/session";

import "./FavoriteIcon.css"

const FavoriteIcon = ({sessionUser, product}) => {
    const dispatch = useDispatch();

    let [heartColor, setHeartColor] = useState("")

    if(!sessionUser) heartColor=""

    if(sessionUser?.user_favorites){
        for (let fav of sessionUser?.user_favorites){
            if(fav.id == product.id) heartColor="redheart"
        }
    }

    useEffect(() => {
       
      }, [heartColor]);


    const handleFavorite = async () => {
        if(!sessionUser){
            window.alert("Please log in")
        }

        if(heartColor == "redheart"){
            let deleteFav = await dispatch(thunkDeleteFav(product.id, sessionUser.id))
            setHeartColor("")
        }else if(heartColor == ""){
            let addtoFav = await dispatch(thunkAddFav(product?.id, sessionUser?.id))
            setHeartColor("redheart")
        }

    }

    return(
        <button onClick={handleFavorite} className={heartColor}>
            <i className="fa-regular fa-heart fa-lg" />
        </button>
    )
}

export default FavoriteIcon