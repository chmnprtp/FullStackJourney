let {readFileAsync, writeFileAsync} = require("./assessment1");

// let data = readFileAsync("./assessment1.js");
// // console.log(data);

// data.then((data)=>{
//     console.log("Inside")
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })


let result = writeFileAsync("demo.txt","hello");
result.then(()=>{
    console.log("file creted");
})