// import express from "express";
// import mongodb from "mongodb";
// import myRoutes from "./routes.js";
let express = require("express");
let myRoutes = require("./routes.js")

const app = express();



//! middleware
app.use(express.urlencoded( // this is middleware // parse data from form
    {extended:true}         // use qs module: parsing data, queryString by default()-- drawback -> can parse nested object or nested data
));
app.use("/api",myRoutes) // api versioning/static path
// content/type ==> form-urlencoded
// app.use(function(req,res,next){
//     statements ==> req.body modify
//     next()
// })

app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("Server running at port 9000");
})


//! if you want to use ES format syntax ,a dd one property in package.json file ==> 

// node --watch server ==> watch mode(built mode) ==> this will only watch one file
//! nodemon ==> .js file save ==> server will restart
//? to install nodemon as development dependency ==> npm i nodemon -D
// nodemon filename

// npm i nodemon -global