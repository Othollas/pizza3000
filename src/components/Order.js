import React from "react";
import Header from "./Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PizzaCard from "./PizzaCard";
import pizzas from "../pizzas";
import { useDispatch, useSelector } from "react-redux";
import { editPizza } from "../slices";
import CartDisplay from "./CartDisplay";

import { useParams } from "react-router-dom";
library.add(faArrowLeft);

const Order = () => {
  const orders = useSelector((state) => state.data.orders);

  const { id } = useParams();
  const dispatch = useDispatch();

  const addPizza = (pizza) => {
    dispatch(editPizza(pizza));
  };

  const calculateTotal = () => {
    let total = 0;

    orders.forEach((order) => {
      order.items.forEach((pizza) => {
        total += pizza.price;
      });
    });
    return total;
  };

  const renderPizza = () => {
    const listPizzas = pizzas.map((pizza) => {
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
  const renderArray = orders.map((order) => {
    const listPizza = order.items.map((pizza) => {
      return (
        <div key={pizza.id}>
          <p>
            {pizza.price} - {pizza.name}
          </p>
        </div>
      );
    });

    return listPizza;
  });
  return (
    <div>
      <Header showIcon="true" />
      <div className="main">
        <div className="containerOrder">
          <div className="order">{renderPizza()}</div>
          <div className="list">
            <h2>Détail de la commande numéro {id} </h2>
            {renderArray}

            <h3>Total de la commande : {calculateTotal()} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
