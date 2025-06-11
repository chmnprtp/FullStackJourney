import React, { createContext } from 'react'
export const GLOBAL_CONTEXT = createContext();

const Context2 = (props) => {
    console.log(props); //{Children:{$$typeof:....}}
    const data = "Hello World";
  return (
    <GLOBAL_CONTEXT.Provider value={data}>
        {props.children}
    </GLOBAL_CONTEXT.Provider>
  )
}

export default Context2