//! Initilise git repositiory

//git init
//create a file - .gitignore - inside it write -> node_modules
//git add.
//git commit -m "message"

// create new repo on github
// then follow github instruction for existing repo



//-------------------------------------------------------
/*
const express = require("express");

const app = express();

// app.use("/",(req,res)=>{ // anything after / will run this
//     //* Sequence of use matters
//     res.send("Hello from the server");
// })

//! Order of routes matters
// this will match all http method API calls to /hello
app.use("/hello",(req,res)=>{ // also handles http://localhost:3000/hello/sdf/aer
    res.end("hello ");
})

app.use("/hello2",(req,res)=>{  // not worki after /hello
    res.end("hello2 ");
})

app.use("/test",(req,res)=>{ // http://localhost:3000/test/hello
    res.end("testinf");
})

app.use("/",(req,res)=>{ // anything after / will run this
   
    res.send("Hello from the server");
})

app.listen(3000,(req,res)=>{
    console.log("Server is Running")
})
*/
//------------------------------------------------------
/*
const express = require("express");
const app = express();

// app.use("/user",(req,res)=>{
//     res.send("On the top");
// })

// This will only handle GET call to user
app.get("/user",(req,res)=>{
    res.send({fistname:"Chaman",lastname:"Pratap"});
})

app.post("/user",(req,res)=>{
    // Save data to databse
    res.send("Data save successfully to db");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully");
})

app.listen(3001,()=>{
    console.log("Server is running");
})
*/
//------------------------------------------------------

const express = require("express");
const app = express();

app.get("/abc", (req,res) => {
    // http://localhost:3002/abc?userId=101
    console.log(req.query); // [Object: null prototype] { userId: '101' }
    res.send({ firstname: "chaman", lastname: "pratap" });
});

app.get("/user/:userId",(req,res)=>{
    // http://localhost:3002/user/111
    console.log(req.params); // [Object: null prototype] { userId: '111' }
    res.send();
})

app.listen(3002,()=>{
    console.log("server is running");
})