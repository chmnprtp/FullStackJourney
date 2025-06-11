import React from 'react'

const ChildX = (props) => {
    console.log("Child")
  return (
    <div>
        <h1>ChildX</h1>
    </div>
  )
}
// export default ChildX;
export default React.memo(ChildX)