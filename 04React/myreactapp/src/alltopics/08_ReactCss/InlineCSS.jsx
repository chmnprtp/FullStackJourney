import React from 'react'

const InlineCSS = () => {
    let styles = {
        backgroundColor:"red",
        color:"white",
    }
  return (
    <div>
        <h1 style={styles}>InlineCSS </h1>
        <h2 style={{backgroundColor:"springgreen", color:"wheat"}}>Inline CSS Second Line</h2>
    </div>
  )
}

export default InlineCSS