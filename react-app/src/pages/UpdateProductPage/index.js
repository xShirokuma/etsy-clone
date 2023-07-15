import { ProductForm } from "../../components"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import { fetchProducts } from "../../store/products"

const UpdateProduct = () => {
  const { productId } = useParams()
  const product = useSelector((state) => state.products[productId])

  if (!product) return <></>

  return <ProductForm product={product} formType="Update your product" />
}

export default UpdateProduct
