import React, { useReducer } from 'react'

let initialState = 0;
function reducerFn(prevState,action){
    switch (action) {
        case "increment":
            return prevState+1;
        case "decrement":
            return prevState-1;
        case "reset":
            return prevState=0;
    }
}

const Reducer = () => {
   let [state,dispatch] = useReducer(reducerFn,initialState);
   console.log(state);
  return (
    <div>
        <h1>Reducer {state}</h1>
        <button className="mx-3 bg-amber-200" onClick={()=> dispatch("increment")}>Increment</button> <br />
        <button className="mx-3 bg-amber-700" onClick={()=> dispatch("decrement")}>decrement</button> <br />
        <button className="mx-3 " onClick={()=> dispatch("reset")}>reset</button>
    </div>
  )
}

export default Reducer