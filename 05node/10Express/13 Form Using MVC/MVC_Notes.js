
//! 1) 
// routes.js
// in evry routes file we have to follow 3 setHeapSnapshotNearHeapLimit
// 1) destructure ROuter Component from server
// 2) invoke top level function
// 3) export it

///let {Router} = require("express")
// let router = Router();

//! 2(
// home page
// app.get("/",(req,res)=>{
//     res.end("home page");
// })
// module.exports = router

//! 3)
/**
 * server.js
 * for every routes file
 * 1) import the routes file
 * 2) use it in middleware
 * 
 * let myRoutes = require("./routes.js")
 */

/**
 * controller.js
 * 
 *  all functuinality
 * 
 */