import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './ProductForm.css'
import { thunkNewProduct, thunkEditProduct } from "../../store/products"

const ProductForm = ({ product, formType }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    const [name, setName] = useState(product?.name);
    const [description, setDescription] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [previewImage, setPreiewImage] = useState(product?.previewImage);
    const [url1, setUrl1] = useState(product?.url1);
    const [url2, setUrl2] = useState(product?.url2);
    const [url3, setUrl3] = useState(product?.url3);
    const [url4, setUrl4] = useState(product?.url4);
    const [available, setAvailable] = useState(product?.available);

    const [errors, setErrors] = useState({});

    useEffect(() => {

    },[name,description,price,available,previewImage,url1,url2,url3,url4])

    const handleSubmit = async(e) => {
        e.preventDefault();
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
            url4
        }

        const images = [url1, url2, url3, url4]


        if(formType === 'Create a New Product'){
            let createdProduct = await dispatch(thunkNewProduct(product,images));
            if (createdProduct){
                history.push(`/products/${createdProduct.product.id}`)
            }
        }else if(formType === 'Update your product'){
            let updatedProduct = await dispatch(thunkEditProduct(product))
            if(updatedProduct){
                history.push(`/products/${product.id}`)
            }
        }

        const errors = {};
        if (name==="") {
         errors.name = "Name is required";
        }
        if (description==="") {
            errors.description = "Description is required";
        }
        if (price==="") {
            errors.price = "Price is required";
        }
        if (previewImage==="") {
            errors.previewImage = "Preview Image is required";
        }
        // if (url1?.match(/\.(jpeg|jpg|png)$/) === null || url2?.match(/\.(jpeg|jpg|png)$/) === null || url3?.match(/\.(jpeg|jpg|png)$/) === null || url4?.match(/\.(jpeg|jpg|png)$/) === null ) {
        //     errors.url1 = "Image URL must end in .png, .jpg, or .jpeg";
        //    }
        if (available==="") {
            errors.available = "Available is required";
        }
        setErrors(errors);

    }

    return (
      <form onSubmit={handleSubmit} className="productForm">
        <div>
            <h1>{formType}</h1>

            <div>
                <h4>Name</h4>
                <h4 className='formErrors'>{errors?.name}</h4>
            </div>
            <label>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </label>

            <div>
                <h4>Description</h4>
                <h4 className='formErrors'>{errors?.description}</h4>
            </div>
            <label>
                <textarea
                    rows="4"
                    cols="44"
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            </label>

            <div>
                <h4>Price</h4>
                <h4 className='formErrors'>{errors?.price}</h4>
            </div>
            <label>
                <input
                    type='number'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
            </label>

            <div className={formType==="Update your product"? "hidden":""}>
                <div>
                    <h4>Preview Image</h4>
                    <h4 className='formErrors'>{errors?.previewImage}</h4>
                </div>
                <label>
                    <input
                        type='text'
                        placeholder='Preview Image'
                        value={previewImage}
                        onChange={(e) => setPreiewImage(e.target.value)}/>
                </label>

                <div >
                    <h4>Image1</h4>
                    <h4 className='formErrors'>{errors?.url1}</h4>
                </div>
                <label>
                    <input
                        type='url'
                        accept=".png,.jpg,.jpeg,.gif"
                        placeholder='Url1'
                        value={url1}
                        onChange={(e) => setUrl1(e.target.value)}/>
                </label>

                <div>
                    <h4>Image2</h4>
                    <h4 className='formErrors'>{errors?.url2}</h4>
                </div>
                <label>
                    <input
                        type='url'
                        accept=".png,.jpg,.jpeg,.gif"
                        placeholder='Url2'
                        value={url2}
                        onChange={(e) => setUrl2(e.target.value)}/>
                </label>

                <div>
                    <h4>Image3</h4>
                    <h4 className='formErrors'>{errors?.url3}</h4>
                </div>
                <label>
                    <input
                        type='url'
                        accept=".png,.jpg,.jpeg,.gif"
                        placeholder='Url3'
                        value={url3}
                        onChange={(e) => setUrl3(e.target.value)}/>
                </label>

                <div>
                    <h4>Image4</h4>
                    <h4 className='formErrors'>{errors?.url4}</h4>
                </div>
                <label>
                    <input
                        type='url'
                        accept=".png,.jpg,.jpeg,.gif"
                        placeholder='Url4'
                        value={url4}
                        onChange={(e) => setUrl4(e.target.value)}/>
                </label>
            </div>

            <div>
                <h4>Available</h4>
                <h4 className='formErrors'>{errors?.available}</h4>
            </div>
            <label>
                <input
                    type='text'
                    placeholder='Available'
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}/>
            </label>

            <div>
                <button  className="createbutton-product" type="submit" disabled={!!Object.values(errors).length}>
                    {formType}
                </button>
            </div>

        </div>
      </form>
    )

}


export default ProductForm
