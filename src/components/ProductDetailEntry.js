import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProduct = async (productId) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
}

const ProductDetailEntry = () => {

    const {productId} = useParams();
    const {data:product, isLoading, error} = useQuery(['product', productId], ()=> fetchProduct(productId));

    if (isLoading){
        return (<div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>)
    }
    
      if (error){
        return <div>Error: {error.message}</div>
      }

  return (
    <div>
        <h1>Product Detail</h1>
        <div className="card" style={{width: "18rem"}}>
            <img src= {product.image} className="card-img-top" alt= {product.title} />
            <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">{product.category}</p>
                <p className="card-text">Price : ${product.price}</p>
                <p>Rating : {product.rating.rate}</p>
                <p>Description : {product.description}</p>
            </div>
            <button type="button" class="btn btn-primary">Add to cart</button>
            <button type="button" class="btn btn-secondary">Remove from cart</button>
        </div>
    </div>
  )
}

export default ProductDetailEntry;
