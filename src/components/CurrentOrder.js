import React from "react";
import { useSelector } from "react-redux";
import ListOrder from "./ListOrder";
import Header from "./Header";

const CurrentOrder = () => {
  const orderIds = useSelector((state) => state.data.orders);
  const pizzaArray = orderIds.pizzaArray;
  const renderOrderId = () => {
    const listOrder = orderIds.map((order) => {
      return <ListOrder id={order.id} />;
    });
    return <div className="listOrder">{listOrder}</div>;
  };
  return (
    <div className="currentOrder">
      <div className="container">
        <Header showIcon="true" />
        {renderOrderId}

        <div className="wrapperOrder">
          <p>Liste des commandes</p>

          <table>
            <thead>
              <tr>
                <th>n°</th>
                <th>Total commande</th>
                <th>Statut commande</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentOrder;
