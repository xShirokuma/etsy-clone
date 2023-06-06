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
    console.log("component", deleteproduct)

    const handleSubmityes = async (e) => {
        const deletedProduct= await dispatch(thunkDeleteProduct(deleteproduct.id))
          e.preventDefault();
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
            
                <div>
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to remove this product from the listings?</p>
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
