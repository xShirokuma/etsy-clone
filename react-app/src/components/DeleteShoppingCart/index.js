import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { thunkDeleteCartItem } from "../../store/session"
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './DeleteShoppingCart.css'

const DeleteShoppingCart = ({cartId, productId,sessionuserId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} =  useModal();
    console.log("props",cartId,productId,sessionuserId)

    const handleSubmityes = async (e) => {
      e.preventDefault();
      const deletedProduct = await dispatch(thunkDeleteCartItem(sessionuserId, cartId, productId))
      await closeModal()
    }

    const handleSubmitno = async (e) => {
      e.preventDefault()
      closeModal()
    }
        
  return(
    <div>
      <h1>Confirm Delete</h1>
      <p>Are you sure you want to remove this product?</p>
      <form>
        <div className="delete-buttons">
          <button  onClick={handleSubmityes}>Yes </button>
          <button  onClick={handleSubmitno}> No </button>
        </div>
      </form>
    </div>
  )
}

export default DeleteShoppingCart
