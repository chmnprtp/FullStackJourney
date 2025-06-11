// npm init ==> creates package.json with configuration

//Express ==> web framework for nodejs

// npm i express ==> install express

// node_modules ==> all the packages code stores here

// dependencies ==> any packages which your project depends on

// 4    .19     .2
//major //minor //patch

// patch - minor fix - bug fix
// minor - new feature - things will be backward compatible
// major - breaking change is there....

//^ - autoupdate to minor change
//~ - autoupdate to major change
//""- never update

// package.lock.json ==> what actual version we are using defined in package.lock.json

const express = require("express");

const app = express(); //creating expressjs application

app.use("/",(req,res)=>{ // Request handler
    res.send("Hello from the server");
})

app.listen(3000,()=>{
    console.log("Server is Running")
})


