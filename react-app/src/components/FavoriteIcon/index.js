import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import { thunkNewReview } from "../../store/products";
import { useModal } from "../../context/Modal";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";

const FavoriteIcon = ({sessionUser, product}) => {
    // const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);

    const handleFavorite = () => {
        if(!sessionUser){
            window.alert("Please log in")
        }

    }

    return(
        <button onClick={handleFavorite}>
            <i className="fa-regular fa-heart fa-lg" />
        </button>
    )
}

export default FavoriteIcon