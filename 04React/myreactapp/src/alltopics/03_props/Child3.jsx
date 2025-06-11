const Child3 = (props) =>{
    console.log(props); //{getData:fn}
    props.getData("Hi From child3")

    //! this function will get called after button click
    function sendData(){
        props.getData("Hello From Child")
    }
    return(
        <div>
            <h1>Child</h1>
            <button onClick={sendData}>send data</button>
        </div>
    )
}
export default Child3;