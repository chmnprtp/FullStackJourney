// default import 
import add from "./functions.js";

// named import
import { multiply,greet,useState } from "./functions.js";

console.log(multiply(5,2))
greet();
console.log(useState());
let [state,setState] = useState("hello")
console.log(state);