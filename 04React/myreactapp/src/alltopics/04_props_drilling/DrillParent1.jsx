import React from 'react'
import DrillChild1 from './DrillChild1'

const DrillParent1 = () => {
    let data = "Hi From Parent Component"
  return (
    <div>
        <h1>DrillParent1 Component</h1>
        <DrillChild1 data={data}/>
    </div>
  )
}

export default DrillParent1