import React from 'react'

const NotFound = () => {
  return (
    <div className="notFound">

      <div className="wrapper">
        <div>4</div><img src={`${process.env.PUBLIC_URL}/pizzaicon.png`} alt="" /><div>4</div>
        <div>not found</div>
      </div>
    </div>
  )
}

export default NotFound;