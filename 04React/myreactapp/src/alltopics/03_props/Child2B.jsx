const Child2B = (props) => {
    // console.log(props) // data: {str: 'React js', arr: Array(3), obj: {…}}

    // let {data:{str,arr,obj}} = data; // or below way
    let {str,arr,obj} = props.data
    console.log(str);
    console.log(arr);
    console.log(obj);
    return(
        <div>
            Child2B Component
        </div>
    )
}
export default Child2B;