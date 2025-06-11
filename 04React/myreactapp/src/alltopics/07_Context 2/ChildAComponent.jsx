import React from 'react'
import ChildBComponent from './ChildBComponent'

const ChildAComponent = () => {
  return (
    <div>
        <h1>ChildAComponent</h1>
        <ChildBComponent/>
    </div>
  )
}

export default ChildAComponent