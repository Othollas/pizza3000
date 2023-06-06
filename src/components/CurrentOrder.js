import React from 'react'
import { useSelector } from 'react-redux'

const currentOrder = () => {
  const orderIds = useSelector(state => state.data.orderIds);
  const renderOrderId = () => {
    const listOrder = orderIds.map((order, index) => {
      return (
        <input type="text" />
      );

    });
    return(
      <div className="listOrder">
        {listOrder}
      </div>
    )
  }
  return (
    <div className='currentOrder'>
      
    </div>
  )
}

export default currentOrder;