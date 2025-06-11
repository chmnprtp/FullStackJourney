import React, { useContext } from 'react'
import { GLOBAL_CONTEXT } from './Context2'

const ChildBComponent = () => {
   const val = useContext(GLOBAL_CONTEXT);
   console.log(val)
  return (
    <div>
        <h1>ChildBComponent {val}</h1>

    </div>
  )
}

export default ChildBComponent