import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./ProductForm.css"
import { thunkNewProduct, thunkEditProduct } from "../../store/products"

const ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"]

const ProductForm = ({ product, formType }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user)

  const [name, setName] = useState(product?.name)
  const [description, setDescription] = useState(product?.description)
  const [price, setPrice] = useState(product?.price)
  const [previewImage, setPreiewImage] = useState(product?.previewImage)
  const [url1, setUrl1] = useState(product?.url1)
  const [url2, setUrl2] = useState(product?.url2)
  const [url3, setUrl3] = useState(product?.url3)
  const [url4, setUrl4] = useState(product?.url4)
  const [available, setAvailable] = useState(product?.available)
  const [attemptSubmitted, setAttemptSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateErrors = useCallback(() => {
    const errorHandler = {}
    if (name === "") {
      errorHandler.name = "Name is required"
    }
    if (description === "") {
      errorHandler.description = "Description is required"
    }
    if (price === "") {
      errorHandler.price = "Price is required"
    }
    if (previewImage === "") {
      errorHandler.previewImage = "Preview Image is required"
    }
    if (available === "") {
      errorHandler.available = "Available is required"
    }

    // if (!ALLOWED_EXTENSIONS.includes(fileExtension))
    //   errorHandler.image =
    //     "Image must be of the following type: .pdf, .png, .jpg, .jpeg"

    if (attemptSubmitted) setErrors(errorHandler)
    if (Object.keys(errorHandler).length !== 0) {
      return false
    } else return true
  }, [attemptSubmitted, name, description, price, previewImage, available])

  useEffect(() => {
    validateErrors()
  }, [validateErrors])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptSubmitted(true)
    if (!validateErrors()) {
      return
    }

    product = {
      ...product,
      userId: sessionUser.id,
      name,
      description,
      price,
      available,
      previewImage,
      url1,
      url2,
      url3,
      url4,
    }

    const images = [url1, url2, url3, url4]

    if (formType === "Create a New Product") {
      let createdProduct = await dispatch(thunkNewProduct(product, images))
      if (createdProduct) {
        history.push(`/products/${createdProduct.product.id}`)
      }
    } else if (formType === "Update your product") {
      let updatedProduct = await dispatch(thunkEditProduct(product))
      if (updatedProduct) {
        history.push(`/products/${product.id}`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="productForm">
      <div>
        <h1>{formType}</h1>
        <div>
          <h4>Name</h4>
          <h4 className="formErrors">{errors?.name}</h4>
        </div>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div>
          <h4>Description</h4>
          <h4 className="formErrors">{errors?.description}</h4>
        </div>
        <label>
          <textarea
            rows="4"
            cols="44"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div>
          <h4>Price</h4>
          <h4 className="formErrors">{errors?.price}</h4>
        </div>
        <label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <div className={formType === "Update your product" ? "hidden" : ""}>
          <div>
            <h4>Preview Image</h4>
            <h4 className="formErrors">{errors?.previewImage}</h4>
          </div>
          <label>
            <input
              type="text"
              placeholder="Preview Image"
              value={previewImage}
              onChange={(e) => setPreiewImage(e.target.value)}
            />
          </label>
          <div>
            <h4>Image1</h4>
            <h4 className="formErrors">{errors?.url1}</h4>
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
            <h4>Image2</h4>
            <h4 className="formErrors">{errors?.url2}</h4>
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
            <h4>Image3</h4>
            <h4 className="formErrors">{errors?.url3}</h4>
          </div>
          <label>
            <input
              type="url"
              accept=".png,.jpg,.jpeg,.gif"
              placeholder="Url3"
              value={url3}
              onChange={(e) => setUrl3(e.target.value)}
            />
          </label>
          <div>
            <h4>Image4</h4>
            <h4 className="formErrors">{errors?.url4}</h4>
          </div>
          <label>
            <input
              type="url"
              accept=".png,.jpg,.jpeg,.gif"
              placeholder="Url4"
              value={url4}
              onChange={(e) => setUrl4(e.target.value)}
            />
          </label>
        </div>
        <div>
          <h4>Available</h4>
          <h4 className="formErrors">{errors?.available}</h4>
        </div>
        <label>
          <input
            type="text"
            placeholder="Available"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          />
        </label>
        <div>
          <button className="createbutton-product" type="submit">
            {formType}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
