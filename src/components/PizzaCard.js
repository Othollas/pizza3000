import React from 'react'

const PizzaCard = ({ img, name, price , action , onclick}) => {
    return (
        <div className="wrapperPizza" onClick={action}>
            <img src={img} alt="" />
            <div className="wrapperText">
                <h1>{name}</h1>
                <p>{price} $</p>
            </div>
        </div>
    )
}

export default PizzaCard