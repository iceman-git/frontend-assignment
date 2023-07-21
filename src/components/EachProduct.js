import React from 'react';
import { Link } from 'react-router-dom';

const EachProduct = ({product}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <Link to= {`/product/${product.id}`}>
            <img src= {product.image} className="card-img-top" alt= {product.title} />
        </Link>
        <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <p className="card-text">{product.category}</p>
            <p className="card-text">Price : ${product.price}</p>
            <p>Rating : {product.rating.rate}</p>
        </div>
    </div>
  )
}

export default EachProduct;
