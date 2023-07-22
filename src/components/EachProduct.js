import React from 'react';
import { Link } from 'react-router-dom';
import {BsCartCheckFill} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectAllItems } from '../cartSlice';

const EachProduct = ({product}) => {

  const dispatch = useDispatch();
  const orderedItem = useSelector(selectAllItems);

  const existInCart = orderedItem.find(item => item.id === product.id);

  const absoluteClass= "cart-icon";
  const conditionalClass= existInCart? "active": null;
  const isDisabled= Boolean(conditionalClass);

  return (
    <div className="card container-item" style={{width: "18rem"}}>
        <Link to= {`/product/${product.id}`}>
            <img src= {product.image} className="card-img-top image" alt= {product.title} />
        </Link>
        <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <p className="card-text">{product.category}</p>
            <h5 className="card-text price">${product.price}</h5>
            <p>Rating : {product.rating.rate}</p>
            <button disabled={isDisabled} className="cart-button">
              <BsCartCheckFill className={`${absoluteClass} ${conditionalClass}`} onClick = {() => dispatch(addItemToCart({...product, quantity: 1}))}/>
            </button>
        </div>
    </div>
  )
}

export default EachProduct;
