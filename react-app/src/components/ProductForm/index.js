import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import './ProductForm.css'
import { thunkNewProduct } from "../../store/products"

const ProductFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [previewImage, setPreiewImage] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [url3, setUrl3] = useState("");
    const [url4, setUrl4] = useState("");
    const [available, setAvailable] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
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
            errors.previewImage = "previewImage is required";
        }
        if (url1.match(/\.(jpeg|jpg|png)$/) === null || url2.match(/\.(jpeg|jpg|png)$/) === null || url3.match(/\.(jpeg|jpg|png)$/) === null || url4.match(/\.(jpeg|jpg|png)$/) === null ) {
            errors.url1 = "Image URL must end in .png, .jpg, or .jpeg";
           }
        if (available==="") {
            errors.available = "Available is required";
        }
        setErrors(errors);
    },[name,description,price,available,previewImage,url1,url2,url3,url4])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const product = { 
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
   
        let createdProdcut= await dispatch(thunkNewProduct(product,images));

        if (createdProdcut){
            history.push(`/products/${product.id}`)
        }
    }


    return (
      <form onSubmit={handleSubmit} className="productForm">
        <div>
            <h1>Create New Product</h1>
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
                <input 
                    type='text'
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
                    type='text'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
            </label>

            <div>
                <h4>previewImage</h4>
                <h4 className='formErrors'>{errors?.previewImage}</h4>
            </div>
            <label>
                <input 
                    type='text'
                    placeholder='previewImage'
                    value={previewImage}
                    onChange={(e) => setPreiewImage(e.target.value)}/>
            </label>

            <div>
                <h4>url1</h4>
                <h4 className='formErrors'>{errors?.url1}</h4>
            </div>
            <label>
                <input 
                    type='text'
                    placeholder='Url1'
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)}/>
            </label>

            <div>
                <h4>url2</h4>
                <h4 className='formErrors'>{errors?.url2}</h4>
            </div>
            <label>
                <input 
                    type='text'
                    placeholder='Url2'
                    value={url2}
                    onChange={(e) => setUrl2(e.target.value)}/>
            </label>

            <div>
                <h4>url3</h4>
                <h4 className='formErrors'>{errors?.url3}</h4>
            </div>
            <label>
                <input 
                    type='text'
                    placeholder='Url3'
                    value={url3}
                    onChange={(e) => setUrl3(e.target.value)}/>
            </label>

            <div>
                <h4>url4</h4>
                <h4 className='formErrors'>{errors?.url4}</h4>
            </div>
            <label>
                <input 
                    type='text'
                    placeholder='Url4'
                    value={url4}
                    onChange={(e) => setUrl4(e.target.value)}/>
            </label>

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
                    Create Product
                </button>
            </div>
            
        </div>
      </form>
    )

}

    
export default ProductFormPage
