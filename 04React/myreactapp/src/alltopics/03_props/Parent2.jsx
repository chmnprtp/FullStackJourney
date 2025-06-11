import Child2 from "./Child2"
import Child2B from "./Child2B";

const Parent2 = () => {
    let str = "React js"
    let arr = ["frontend","backend","database"];
    let obj = {
        id:1,
        ename:"Chaman",
    };

    return(
        <div>
            <h1>Parent 2</h1>
            <Child2 prop1={str} prop2={arr} prop3={obj} />

            {/* sending multiple value in single prop */}
            <Child2B data={{str,arr,obj}}/> 
            {/* we can also send in array than object */}
        </div>
    )
}
export default Parent2