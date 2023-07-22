import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../cartSlice';

const fetchProduct = async (productId) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
}

const ProductDetailEntry = () => {

  const [noOfPieces, setNoOfPieces] = useState(0);

  const {productId} = useParams();
  const {data:product, isLoading, error} = useQuery(['product', productId], ()=> fetchProduct(productId));

  const dispatch = useDispatch();

  if (isLoading){
    return <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
  }
    
  if (error){
    return <div>Error: {error.message}</div>
  }

  return (
      <div>
        <div className="card-details" >
            <div className= 'image-container'>
              <img src= {product.image} className="detail-image" alt= {product.title} />
            </div>
            <div className="details-container">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.category}</p>
                <h5 className="card-text price">${product.price}</h5>
                <p>Rating: {product.rating.rate}</p>
                <input type= "number" placeholder= "Enter number of pieces" value= {noOfPieces} onChange= {(e)=> setNoOfPieces(e.target.value)} />
                <button type="button" className="btn btn-primary mx-3" onClick = {() => dispatch(addItemToCart({...product, quantity: noOfPieces}))}>Add to cart</button>
                <button type="button" className="btn btn-secondary mx-3" onClick = {() => dispatch(removeItemFromCart(product.id))}>Remove from cart</button>
                <p>Description:<br /> {product.description}</p>
            </div>
        </div>
      </div>
  )
}

export default ProductDetailEntry;