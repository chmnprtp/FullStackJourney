import { createContext } from "react"
import ParentA1 from "./ParentA1";

// STEP 1 : creating a global store
export let myStore = createContext(); // return context Object


const MyContext = () => {
    let data = "Hello World";
    console.log(myStore) // ContextObject-->{Provider:{$$typeof:}}
    return(
        <div>
            {/* STEP 2: Providing access to parent Component */}
            <myStore.Provider value={data}> {/* value prop is pre-define*/}
                <ParentA1 />  {/* giving acces of context to ParentA1 */}
            </myStore.Provider>
        </div>
    )
}
export default MyContext