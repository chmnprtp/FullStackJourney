import React, { useContext } from 'react'
import { GLOBAL_CONTEXT } from './Context2'

const Cart = () => {
   let value =  useContext(GLOBAL_CONTEXT)
  return (
    <div>
        <h1>Cart {value}</h1>
    </div>
  )
}

export default Cart