import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkNewReview } from "../../store/products";
import { useModal } from "../../context/Modal";
import "./PostReviewPage.css";

const PostReviewModal = ({ productId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const { newproductId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errors = {};
    if (review === "") {
      errors.review = "Review is required";
    }
    if (stars > 5 || stars < 1) {
      errors.stars = "Stars must be between 1 and 5";
    }
    // if (url1?.match(/\.(jpeg|jpg|png)$/) === null || url2?.match(/\.(jpeg|jpg|png)$/) === null) {
    //     errors.url1 = "Image URL must end in .png, .jpg, or .jpeg";
    // }
    setErrors(errors);
  }, [review, stars, url1, url2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newreview = {
      productId: productId,
      userId: sessionUser.id,
      review,
      stars,
      url1,
      url2,
    };
    let createdReview = await dispatch(thunkNewReview(newreview, productId));
    // if (createdReview){
    //     history.push(`/products/${productId}`)
    // }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>Review</h4>
        <h4 className="formErrors">{errors?.review}</h4>
      </div>
      <label>
        <input
          type="text"
          placeholder="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>

      <div>
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
        <h4>url1</h4>
        {/* <h4 className='formErrors'>{errors?.url1}</h4> */}
      </div>
      <label>
        <input
          type="url"
          accept=".png,.jpg,.jpeg,.gif"
          placeholder="Url1"
          value={url1}
          onChange={(e) => setUrl1(e.target.value)}
        />
      </label>

      <div>
        <h4>url2</h4>
        {/* <h4 className='formErrors'>{errors?.url2}</h4> */}
      </div>
      <label>
        <input
          type="url"
          accept=".png,.jpg,.jpeg,.gif"
          placeholder="Url2"
          value={url2}
          onChange={(e) => setUrl2(e.target.value)}
        />
      </label>

      <div>
        <button
          className="createbutton-product"
          type="submit"
          disabled={!!Object.values(errors).length}
        >
          Post your review
        </button>
      </div>
    </form>
  );
};

export default PostReviewModal;
