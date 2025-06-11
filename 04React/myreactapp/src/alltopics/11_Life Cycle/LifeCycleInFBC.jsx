import React, { useEffect, useRef, useState } from 'react'

const LifeCycleInFBC = () => {
    const [count,setCount] = useState(5);
    let isInitialRender = useRef(true); // {current:true}  // using to stop rendering at initial 

    useEffect(()=>{
        console.log("render");
    });

    useEffect(()=>{
        console.log("component did mount");
          let intervalid = setInterval(() => {
        console.log("first")
    }, 2000); 

        return () => {  // getSnapShot 
            console.log("component will unmount") 
            clearInterval(intervalid)
        }
    },[]) // array dependency

  
    // todo Component did update
    useEffect(()=>{
        if(isInitialRender.current){
            isInitialRender.current = false;
            return () => {  // getSnapShot 
                console.log("prev state was ",count) 
            };
        }
        console.log("component did update")

        return () => {  // getSnapShot 
            console.log("prev state was ",count) 
        }
       
    },[count])

  
  return (
    <div>
        <h1>LifeCyleFBC {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default LifeCycleInFBC