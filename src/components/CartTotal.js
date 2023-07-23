import React from 'react'

const CartTotal = ({cartItems}) => {

    const total= cartItems.reduce((accumulator,item)=> accumulator + item.price*item.quantity, 0);

  return (
    <div style={{marginBottom: "5em", marginLeft: "2em", marginRight: "2em"}}>
      <h2>Cart Total</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item,index)=> (
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price * item.quantity}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${total}</h3>
    </div>
  )
}

export default CartTotal;
