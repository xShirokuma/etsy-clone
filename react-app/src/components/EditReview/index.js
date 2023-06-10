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
      <div className="log-in-modal">
        <h1>Edit your review</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Review
            <h4 className='formErrors'>{errors?.reviews}</h4>
            <input 
                type='text'
                placeholder='Review'
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}/>
        </label>

        <div className="review-stars">
            <h4>Stars</h4>
            <h4 className='formErrors'>{errors?.stars}</h4>
        </div>
        <div className="stars">
          <i
            className={
                stars >= 1
                ? "fa-sharp fa-solid fa-star"
                : "fa-regular fa-star fa-lg"
            }
            // onMouseEnter={() => {setStars(1)} }
            // onMouseLeave={() => {setStars(0)} }
            style={stars >= 1 ? { color: "#FCE79A" } : {}}
            onClick={() => {
                setStars(1);
            }}
          ></i>
          <i
            className={
                stars >= 2
                ? "fa-sharp fa-solid fa-star"
                : "fa-regular fa-star fa-lg"
            }
            // onMouseEnter={() => {setStars(2)} }
            // onMouseLeave={() => {setStars(0)} }
            style={stars >= 2 ? { color: "#FCE79A" } : {}}
            onClick={() => {
                setStars(2);
            }}
          ></i>
          <i
            className={
                stars >= 3
                ? "fa-sharp fa-solid fa-star"
                : "fa-regular fa-star fa-lg"
            }
            style={stars >= 3 ? { color: "#FCE79A" } : {}}
            // onMouseEnter={() => {setStars(3)} }
            // onMouseLeave={() => {setStars(0)} }
            onClick={() => {
                setStars(3);
            }}
          ></i>
          <i
            className={
                stars >= 4
                ? "fa-sharp fa-solid fa-star"
                : "fa-regular fa-star fa-lg"
            }
            // onMouseEnter={() => {setStars(4)} }
            // onMouseLeave={() => {setStars(0)} }
            style={stars >= 4 ? { color: "#FCE79A" } : {}}
            onClick={() => {
                setStars(4);
            }}
          ></i>
          <i
            className={
                stars >= 5
                ? "fa-sharp fa-solid fa-star"
                : "fa-regular fa-star fa-lg"
            }
            // onMouseEnter={() => {setStars(5)} }
            // onMouseLeave={() => {setStars(0)} }
            style={stars >= 5 ? { color: "#FCE79A" } : {}}
            onClick={() => {
                setStars(5);
            }}
          ></i>
        </div>
        {/* <label>
            <input 
                type='number'
                placeholder='Stars'
                value={stars}
                onChange={(e) => setStars(e.target.value)}/>
        </label> */}
        <div>
                <button  className="createbutton-product" type="submit" disabled={!!Object.values(errors).length}>
                    Edit your review
                </button>
        </div>

        </form>
      </div>
)
}
export default EditReview
