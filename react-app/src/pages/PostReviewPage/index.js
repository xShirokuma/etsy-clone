import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { thunkNewReview } from "../../store/products"
import { useModal } from "../../context/Modal"
import "./PostReviewPage.css"

const PostReviewModal = ({ productId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { closeModal } = useModal()
  const { newproductId } = useParams()
  const sessionUser = useSelector((state) => state.session.user)

  const [review, setReview] = useState("")
  const [stars, setStars] = useState(0)
  const [url1, setUrl1] = useState("")
  const [url2, setUrl2] = useState("")
  const [attemptSubmitted, setAttemptSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateErrors = useCallback(() => {
    const errorHandler = {}
    if (review === "") {
      errorHandler.review = "Review is required"
    }
    if (stars > 5 || stars < 1) {
      errorHandler.stars = "Stars must be between 1 and 5"
    }

    if (attemptSubmitted) setErrors(errorHandler)
    if (Object.keys(errorHandler).length !== 0) {
      return false
    } else return true
  }, [attemptSubmitted, review, stars])

  useEffect(() => {
    validateErrors()
  }, [validateErrors])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptSubmitted(true)
    if (!validateErrors()) {
      return
    }

    const newreview = {
      productId: productId,
      userId: sessionUser.id,
      review,
      stars,
      url1,
      url2,
    }

    const errors = {}
    if (review === "") {
      errors.review = "Review is required"
    }
    if (stars > 5 || stars < 1) {
      errors.stars = "Stars must be between 1 and 5"
    }

    let createdReview = await dispatch(thunkNewReview(newreview, productId))
    // if (createdReview){
    //     history.push(`/products/${productId}`)
    // }
    closeModal()
  }

  return (
    <div className="log-in-modal">
      <h1>Post your review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Review
          <h4 className="formErrors">{errors?.review}</h4>
          <textarea
            rows="4"
            cols="44"
            placeholder="Enter your review here"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Enter your review here"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          /> */}
        </label>
        <div className="review-stars">
          <h4>Stars</h4>
          <h4 className="formErrors">{errors?.stars}</h4>
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
                setStars(1)
              }}></i>
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
                setStars(2)
              }}></i>
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
                setStars(3)
              }}></i>
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
                setStars(4)
              }}></i>
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
                setStars(5)
              }}></i>
            {/* <p> Stars</p> */}
          </div>
          {/* </div>
            <label>
                <input 
                    type='number'
                    placeholder='Stars'
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}/>
            </label>
            <div > */}
          {/* <h4 className='formErrors'>{errors?.url1}</h4> */}
        </div>
        <label>
          Image
          <input
            type="url"
            accept=".png,.jpg,.jpeg,.gif"
            placeholder="Review Image 1"
            value={url1}
            onChange={(e) => setUrl1(e.target.value)}
          />
        </label>

        <div>{/* <h4 className='formErrors'>{errors?.url2}</h4> */}</div>
        <label>
          Image
          <input
            type="url"
            accept=".png,.jpg,.jpeg,.gif"
            placeholder="Review Image 2"
            value={url2}
            onChange={(e) => setUrl2(e.target.value)}
          />
        </label>

        <div>
          <button className="createbutton-product" type="submit">
            Post your review
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostReviewModal
