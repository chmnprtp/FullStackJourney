import { useState } from "react"
import Child5 from "./Child5"

const Parent5 = () =>{
    const [state,setState] = useState("");
    return(
        <div>
            <h1>Parent5 Component {state}</h1>
            <Child5 getData={setState}/>
        </div>
    )
}
export default Parent5
