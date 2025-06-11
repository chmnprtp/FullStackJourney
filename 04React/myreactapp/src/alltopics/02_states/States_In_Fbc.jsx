import { use, useState } from "react";

const States_In_Fbc = () => {
    // console.log(useState); //Output:[undefined,f]
    let [state,setState] = useState("add to cart");
    // console.log(state); //Output:undefined - if nothing passed
    // console.log(useState); //Output: f()
    function cartbtn(){
        console.log("add to cart");
        setState("go to cart")
    }

    return(
        <div>
            <h1>States in FBC</h1>
            {/* no need to use () after function name in xml */}
            <button onClick={cartbtn}>{state}</button> 
            {/* {} is jsx expression to use js variable in xml  */}
        </div>
    )
}
export default States_In_Fbc;