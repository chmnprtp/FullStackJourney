import React from 'react'
import { useContext } from 'react'
import { myStore } from './MyContext'

const ChildA2 = () => {

    // STEP 3: Consume a context
    let data = useContext(myStore); //useContext accept context object in argument
    console.log(data)
  return (
    <div>ChildA2 {data}</div>
  )
}

export default ChildA2