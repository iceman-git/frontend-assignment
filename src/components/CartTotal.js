import React from 'react'

const CartTotal = ({cartItems}) => {

    const total= cartItems.reduce((accumulator,item)=> accumulator + item.price*item.quantity, 0);

  return (
    <div style={{marginBottom: "5em", marginLeft: "2em"}}>
      <h2>Cart Total</h2>
      <ul>
        {cartItems.map((item, index) => (
            <li key={index}>
                {item.title} ({item.quantity}) : ${item.price} (each)
            </li>
        ))}
      </ul>
      <h3>Total Price: ${total}</h3>
    </div>
  )
}

export default CartTotal;
