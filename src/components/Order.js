import React from "react";
import Header from "./Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PizzaCard from "./PizzaCard";
import pizzas from "../pizzas";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices";
import CartDisplay from "./CartDisplay";
library.add(faArrowLeft);
const Order = () => {
  const orders = useSelector((state) => state.data.orders);
  const dispatch = useDispatch();

  const addPizza = (pizza) => {
    dispatch(add(pizza));
  };
  const renderPizza = () => {
    const listPizzas = pizzas.map((pizza, index) => {
      return (
        <PizzaCard
          key={pizza.id}
          img={pizza.img}
          price={pizza.price}
          name={pizza.name}
          action={() => addPizza(pizza)}
        />
      );
    });

    return <div>{listPizzas}</div>;
  };
  return (
    <div>
      <Header icon="fa-solid fa-arrow-left" />
      <div className="main">
        <div className="containerOrder">
          <div className="order">{renderPizza()}</div>
          <div className="list">
            <p>Détail de la commande n° commande </p>

            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
