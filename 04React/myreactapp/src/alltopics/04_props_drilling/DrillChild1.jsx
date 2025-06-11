import React from "react";
import DrillChild2 from "./DrillChild2";

const DrillChild1 = (props) => {
    // console.log(data)
  return (
    <div>
      <h1>Drill Child1 Component</h1>
      <DrillChild2 data={props.data}/>
    </div>
  );
};

export default DrillChild1;
