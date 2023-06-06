import React from 'react'

const CartDisplay = ({ items, total }) => {

    const cartItems = items.map(item => {
        return (
            <div key={item.id}> {item.name} + {item.price}€</div>
        )
    })

  return (
    <div>
        {cartItems}
        <div className="App-cart-total">Soit un total de {total}€</div>
    </div>
  )
}

export default CartDisplay