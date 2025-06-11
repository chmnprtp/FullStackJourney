import React, { useCallback, useMemo, useState } from 'react'
import ChildX from './ChildX';

const MyComponent = () => {
    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100);

    function multiply1(){
        console.log("multiply")
        return add *5 ;
    }

    //! it return memorized value
    let memorisedValue = useMemo(()=>{
            console.log("multiply useMemo")
            return add *5 ;
    },[add])

    function display(){
        console.log("Hello world");
    }

    //!it return memoirised function
   let display1 = useCallback(()=>{
        console.log("hello world")
    },[])

  return (
    <div>
        <h1>My Component</h1>
        <h2>addition {add}</h2>
        <button className= "bg-green-400" onClick={()=>{setAdd(add+1)}}>Add</button>
        <h2>Substraction {minus}</h2>
        <button className="bg-red-500" onClick={()=>{setMinus(minus-1)}}>Minus</button>
        <h2>Multiplication {multiply1()}</h2> 
        {/* here multiply rendering whenever we are changing stae of add or minus */}

        <h2>useMemo Multiply {memorisedValue}</h2>
        
        {/* <ChildX  display={display}/> */}
        <ChildX  display1={display}/>
    </div>
  )
}

export default MyComponent

// useMemo se har component render ni hoga - bss whi hoga jo dependency array m hoga