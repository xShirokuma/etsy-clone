import React from "react";
import { ProductForm } from "../../components"

const CreateProductPage = () => {

  const product = {
    name: "",
    description: "",
    price: "",
    previewImage: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
    available: ""
  }

  return (
    <div>
        <ProductForm product={product} formType="Create a New Product"/>
    </div>
  )
}

export default CreateProductPage