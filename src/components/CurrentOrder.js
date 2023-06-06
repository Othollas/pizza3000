import React from 'react'
import { useSelector } from 'react-redux'
import ListOrder from './ListOrder';
import Header from './Header';

const CurrentOrder = () => {
  const orderIds = useSelector(state => state.data.orders);

  const renderOrderId = () => {
    const listOrder = orderIds.map(order => {
      return (
        <ListOrder
          id={order.id}
  

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
        showIcon="true"
      />
      {renderOrderId}
    </div>
  )
}

export default CurrentOrder;