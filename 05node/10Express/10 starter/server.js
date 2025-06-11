//! 1) 
//? importing the express module
const express = require("express");
// console.log(express);

//! 2)
//? calling/invoking top level function
let app = express();
// console.log(app)

//! using these app variable
//* assign a port number
//* handle routing
//* use middleware
//* handle req and res object

//! 4) routing ==> routing is defind as handling user's multiple endpoint rquests.
// syntax ==> get("./endpoint",cb);

//? display home page
app.get("/",(req,res)=>{
    res.send("Home page");
});

//? display about page
app.get("/about",(req,res)=>{
    // res.write("using write ");
    // res.end();
    res.end("HI about page");
})

//? display download page
app.get("/download",(req,res)=>{
    res.send("<h1>hello from download page!!</h1>")
})

//! 3) 
//? assigning a port number
app.listen(9000,(err)=>{
    if(err) console.log(err)
    console.log("express server started at 9000")
})