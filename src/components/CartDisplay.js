import React from 'react'

const CartDisplay = ({ items , price }) => {

    const cartItems = items.map(item => {
        return (
            <div key={item.id}>{item.name} - {item.price}€</div>
        )
    });
  return (
    <div>

       {cartItems}
    </div>
  )
}

export default CartDisplay;