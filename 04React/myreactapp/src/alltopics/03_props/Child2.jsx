const Child2 = (props)=>{
    // console.log(props) // {prop1: 'React js', prop2: Array(3), prop3: {…}}
    
    //destructuring
    let {prop1,prop2,prop3} = props;
    console.log(prop1); //React js
    console.log(prop2); //['frontend', 'backend', 'database']
    console.log(prop3); //{id: 1, ename: 'Chaman'}
    
    return(
        <div>
            <h1>Child 2</h1>
        </div>
    )
};
export default Child2