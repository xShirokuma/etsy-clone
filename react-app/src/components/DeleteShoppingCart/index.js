import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { thunkDeleteCartItem } from "../../store/session"
import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import "./DeleteShoppingCart.css"

const DeleteShoppingCart = ({cartId, productId,sessionUserId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} =  useModal();

    const handleSubmityes = async (e) => {
      e.preventDefault();
      const deletedProduct = await dispatch(thunkDeleteCartItem(sessionUserId, cartId, productId))
      await closeModal()
    }

    const handleSubmitno = async (e) => {
      e.preventDefault()
      closeModal()
    }

  return(
    <div className="log-in-modal delete-product-cart">
      <h1>Confirm Delete</h1>
      <h4>Are you sure you want to remove this product ?</h4>
      <form>
        <div className="delete-buttons">
          <button onClick={handleSubmityes}>Yes </button>
          <button onClick={handleSubmitno}> No </button>
        </div>
      </form>
    </div>
  )
}

export default DeleteShoppingCart
