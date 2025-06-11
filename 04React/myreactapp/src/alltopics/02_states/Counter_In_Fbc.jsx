import { useState } from "react"

const Counter_In_Fbc = () => {
    let [counter,setCounter] = useState(0);
    function increment(){
        setCounter(counter+1)
    }
    function Decrement(){
        if(counter > 0){
         setCounter(counter-1)
        }
    }
    function Reset(){
        setCounter(counter=0)
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter_In_Fbc;