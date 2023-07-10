import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";

import { thunkAddFav, thunkDeleteFav } from "../../store/session";

import "./FavoriteIcon.css";

const FavoriteIcon = ({ sessionUser, product, onpagedetails }) => {
  const dispatch = useDispatch();
  const ulRef = useRef();

  let [heartColor, setHeartColor] = useState("");

  if (!sessionUser) heartColor = "";

  if (sessionUser?.user_favorites) {
    for (let fav of sessionUser?.user_favorites) {
      if (fav.id == product?.id) heartColor = "redheart";
    }
  }

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {}, [heartColor]);

  const handleFavorite = async () => {

    if (heartColor == "redheart") {
      let deleteFav = await dispatch(
        thunkDeleteFav(product.id, sessionUser.id)
      );
      setHeartColor("");
    } else if (heartColor == "") {
      let addtoFav = await dispatch(thunkAddFav(product?.id, sessionUser?.id));
      setHeartColor("redheart");
    }
  };

  return (
    <div>
      {!sessionUser ? (
        <OpenModalButton
          buttonText={
            <div className="favorite">
              <i
                className={
                  heartColor ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }
              />
          <p className={onpagedetails ? "" : "hidden"}>
            {heartColor ? "Added to Collection" : "Add to Collection"}
          </p>
            </div>
          }
          onItemClick={closeMenu}
          modalComponent={<LoginFormModal />}
        />
      ) : (
        <button onClick={handleFavorite} className={heartColor}>
          <i
            className={
              heartColor
                ? "fa-solid fa-heart fa-lg"
                : "fa-regular fa-heart fa-lg"
            }
          />
          <p className={onpagedetails ? "" : "hidden"}>
            {heartColor ? "Added to Collection" : "Add to Collection"}
          </p>
        </button>
      )}
    </div>
  );
};

export default FavoriteIcon;
