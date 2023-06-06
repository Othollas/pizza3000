import React from 'react'
import Header from './Header'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PizzaCard from './PizzaCard'
import pizzas from '../pizzas'

library.add(faArrowLeft)
const Order = () => {

    // const pizzas = useSelector(state => state.data.pizzas);




    const renderPizza = () => {
        const listPizzas = pizzas.map(pizza => {
          return (
            <PizzaCard
              key={pizza.id}
              img={pizza.img}
              item={pizza}
              price={pizza.price}
              name={pizza.name}
            />
          );
        });
    
        return (
          <div>
            {listPizzas}
          </div >
        );
      }
    return (
        <div>

            <Header
                icon="fa-solid fa-arrow-left"
            />
            <div className="main">
                <div className="order">
            {renderPizza()}
            </div>
            </div>
        </div>
    )
}

export default Order