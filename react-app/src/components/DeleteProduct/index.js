import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {thunkDeleteProduct} from "../../store/products"
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './DeleteProduct.css'

const DeleteProduct = ({productId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} =  useModal();
    const deleteproduct = useSelector(state => state?.products[productId])

    const handleSubmityes = async (e) => {
        e.preventDefault();
        const deletedProduct = await dispatch(thunkDeleteProduct(deleteproduct.id))
        await closeModal()
        if(deletedProduct){
            history.push('/shop')
          }
    };

    const handleSubmitno = async (e) => {
      e.preventDefault()
      closeModal()
    }

    return(

      <div className="log-in-modal delete-product-modal">
        <h1>Confirm Delete</h1>
        <h4>Are you sure you want to remove this product from the listings?</h4>
        <form>
          <div className="delete-buttons">
            <button  onClick={handleSubmityes}>Yes </button>
            <button  onClick={handleSubmitno}> No </button>
          </div>
        </form>
      </div>
    )
}

export default DeleteProduct
