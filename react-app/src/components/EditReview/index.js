import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { thunkEditReview } from "../../store/products"
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import './EditReview.css'

const EditReview = ({productId, review}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} =  useModal();
console.log("what if review:", review)
    const [reviews, setReviews] = useState(review?.review);
    const [stars, setStars] = useState(review?.stars);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const errors = {};
        if (reviews==="") {
            errors.reviews = "Review is required";
        }
        if (stars > 5 || stars < 1) {
            errors.stars = "Stars must be between 1 and 5";
        }
        setErrors(errors);
    },[review, stars])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const editreview = {
            ...review,
            review: reviews,
            stars,
        }
    let editedReview = await dispatch(thunkEditReview(editreview, productId))
    // if (editedReview){
    //     history.push(`/products/${productId}`) 
    // }
    closeModal()
    }
   
    return(
        <form onSubmit={handleSubmit}>
        <div>
            <h4>Review</h4>
            <h4 className='formErrors'>{errors?.reviews}</h4>
        </div>
        <label>
            <input 
                type='text'
                placeholder='Review'
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}/>
        </label>

        <div>
            <h4>Stars</h4>
            <h4 className='formErrors'>{errors?.stars}</h4>
        </div>
        <label>
            <input 
                type='number'
                placeholder='Stars'
                value={stars}
                onChange={(e) => setStars(e.target.value)}/>
        </label>
        <div>
                <button  className="createbutton-product" type="submit" disabled={!!Object.values(errors).length}>
                    Edit your review
                </button>
        </div>

        </form>
)
}
export default EditReview
