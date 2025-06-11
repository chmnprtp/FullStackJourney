import { useState } from "react";

import Routing1 from "./alltopics/15_browserRouter/Routing1";

const App = () => {
    const [toggle,setToggle] = useState(false);

    function toggleHandle(){
        setToggle(!toggle);
    }
    return (
        <>
            {/* <Navbar/> */}
            {/* <Fbc/> */}
            {/* <Cbc/> */}

            {/* <States_In_Fbc/> */}
            {/* <Counter_In_Fbc/> */}
            
            {/* Props */}
            {/* <Parent/> */}
            {/* <Parent2/> */}
            {/* <Parent3/> */}
            {/* <Parent4/> */}
            {/* <Parent5/> */}

            {/* Prop Drilling */}
            {/* <DrillParent1/> */}
            {/* <ParentA/> */} 

            {/* <MyContext/> */}

            {/* <Context2>
            <ParentComponent/>
            <Cart/>
            </Context2> */}

            {/* <InlineCSS/> */}
            {/* <Card/> */}

            {/* <Controlled1/> */}

            {/* <TodoWrapper/> */}

            {/* <UncontrolledForms/> */}

            {/* <LifeCycleInCBC/> */}
            {/* <button onClick={toggleHandle} className="bg-amber-300">Toggle Component</button>
            {toggle? <LifeCycleInCBC/> : <h1>No Component</h1>} */}

            {/* <LifeCycleInFBC/> */}

            {/* <button onClick={toggleHandle} className="bg-amber-300">Toggle Component</button>
            {toggle ? <LifeCycleInFBC/> : <h1>No Component</h1>} */}

            {/* <FetchApi/> */}

            {/* <button onClick={toggleHandle} className="bg-amber-300 mb-3" >toggle</button>
            {toggle?  <FetchApi2/> : <h1>No Component</h1>} */}

            {/* <Reducer/> */}

            {/* <MyComponent/> */}

            <Routing1/>

            {/* CodeSplitting Below App */}
        </>
    )
}
export default App;







//! CODE SPLITING EXAMPLE
// import React from 'react'
// import Routing2 from './alltopics/16_createBrowserRouter/Routing2'

// const App = () => {
//   return (
//     <div>
//         <Routing2/>
//     </div>
//   )
// }

// export default App