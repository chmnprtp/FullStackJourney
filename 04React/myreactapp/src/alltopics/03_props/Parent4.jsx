import React from "react";
import Child4 from "./Child4"
const Parent4 =()=>{
    const [state,setState] = React.useState("");

    function getData(x){
        console.log(x);
        setState(x);
    }
    return(
        <div>
            <h1>Parent 4 Component {state}</h1>
            <Child4 getData={getData}/>
        </div>
    )
}
export default Parent4