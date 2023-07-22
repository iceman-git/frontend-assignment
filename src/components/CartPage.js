import React from 'react';
import { selectAllItems } from '../cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../cartSlice';
import { Link } from 'react-router-dom';
import CartTotal from './CartTotal';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllItems);

  if(cartItems.length===0){
    return <h1 className="no-item-message">No item added!</h1>
  }

  return (
    <>
      <div className= "cart-section">
        <h1 className= "text-grad-cart">#your cart</h1>
      </div>
      <div className='main-container-cart'>
        {cartItems.map(item => 
          <div className="card container-item" style={{width: "18rem"}}>
            <Link to= {`/product/${item.id}`}>
              <img src= {item.image} className="card-img-top image" alt= {item.title} />
            </Link>
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="card-text">{item.category}</p>
                <h5 className="card-text price">${item.price}</h5>
                <p>Rating : {item.rating.rate}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick = {() => dispatch(removeItemFromCart(item.id))}>Remove from cart</button>
          </div>)}
          
      </div>
      <CartTotal cartItems={cartItems}/>
    </>
  )
}

export default CartPage;