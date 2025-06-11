const Child4 = ({getData}) =>{
    const handleBtn = () =>{
        console.log("Btn clicked");
        getData("Hi from CHild4");
    }
    return(
        <div>
            <h1>Child 4 Component</h1>
            <button onClick={handleBtn}>Click</button>
        </div>
    )
}
export default Child4;