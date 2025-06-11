// default export
function add (n1,n2){
    return n1+n2
}
export default add;
function greet(){
console.log("hell");
}

function useState(val) {
  return [val,()=>{}]  
}
// named export
const multiply = (n1,n2) => n1*n2;
export {multiply,greet,useState};