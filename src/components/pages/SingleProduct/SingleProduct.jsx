import React from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams();
  return (
    <div>SingleProduct
        <span>{id}</span>
    </div>
  )
}

export default SingleProduct