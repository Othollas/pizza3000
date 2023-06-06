import React from 'react'
import { useSelector } from 'react-redux'
import ListOrder from './ListOrder';
import Header from './Header';

const CurrentOrder = () => {
  const orderIds = useSelector(state => state.data.orderid);

  const renderOrderId = () => {
    const listOrder = orderIds.map(order => {
      return (
        <ListOrder
          id={order.id}
          index={order.index}

        />
      );

    });
    return (
      <div className="listOrder">
        {listOrder}
      </div>
    )
  }
  return (

    <div className='currentOrder'>
      <Header
        icon="fa-solid fa-arrow-left"
      />
      {renderOrderId}
    </div>
  )
}

export default CurrentOrder;