const express = require("express");
const myRoutes = require("./routes")
const app = express();


//!middleware
app.use(express.urlencoded({extended:true})); //this only parses html form-data
app.use(express.json()); // this parse json data ...write above routes
app.use("/api",myRoutes);

app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("Server is running at port 9000");
});

//! in .json file we can set our own scripts, like "start":"nodemon server.js" ==>
//! where start is a in buit script, so to use this script we can type npm start

//? for any other different user-defined script we should use "npm run scriptName"


//? steps to use Postman
// 1) click on workspace and select create workspace
// select blank workspace and click on next
// provide your workspace name and click on create a 
// create a collection and name it
// add request in the collection to check the api's
// select the method , provide the correct url and send the request

//! API = application Programming Interface : it is a set of rules that allow two or 
//! more software applications to communicate with each other

//! REST API - representational state transfer API, it is also a type of api which 
//! follow REST architecture
//? 1) stateless communication ==> communication without storing data any data on the server
//? 2) HTTP methods ==> get,post,put,patch,delete
//? 3) url endpoints ==>  
//   /register => post 
//   /login ==> post 
//   /user ==> post
//   /user ==> get 
//   /user:id ==> get
//? 4) cachihng
//? 5) layers
//? 6) req and res ==> data is exchanhed in json or xml format

// https://localhost:9000/api/submit ==> endpoint,route,path



//! mongoose ==> it is a library for  nodeJs to work with mongodb
//? 1) we can create a schema (struture)
//? 2) we cam validate the data
//? 3) PERFORM CRUD Operations
//? 4) perform complex queries