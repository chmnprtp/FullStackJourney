import { useState } from "react";
import ChildA from "./ChildA"

const ParentA = ()=> {
    console.log("parent")
    const [add,setAdd] = useState(0);
    const update = ()=> setAdd(add+1)
    return(
        <div>
            <h1>ParentA Component {add}</h1>
            <button onClick={update}>update</button>
            <ChildA/>
        </div>
    )
}
export default ParentA;