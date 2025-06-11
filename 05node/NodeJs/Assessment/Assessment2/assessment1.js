//! 1) Write a function using fs.readFile(callback) to read a file and log its contents,
//!    Handle errors properly

// try {
//   const fs = require("fs");
//   fs.readFile("./test.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log("file data:", data);
//   });
// } catch (error) {
//   console.log(error);
// }

//! 2) Convert the above fs.readFile(Callback) example into promise-based version using .then() and catch().

// const fs = require("fs").promises;
// let result1 = fs.readFile("./test.txt", "utf-8");
// result1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 3) Create a basic http server using the http module that responds with "Hello world" for all requests.

// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("Hello World");
// }).listen(9000,()=>{
//     console.log("Server running")
// })

//! 4) What is the role of event loop in nodeJs?
// Event loop is the part of libuv in nodeJs which help to handle all the asyn operation
// of node. event loop is a semi infinite loop which check the callstack that it is empty or not.
// if it is empty then it pull the callback to the callstack.
// It has 6 phase in which it runs:-
//      Timer
//      pending
//      idle
//      polling
//      check
//      close

//! 5) Why do scynchronous file operations like fs.readFileSync degrade performance in a Node.js server? Explain with respect tp the event loop and thread pool
/**
 * synchronous operation in nodejs can block the callstack so that we should avoid using it.
 *
 * Example :- is we perform synchronous file read operation , which is too long then
 *            it will run untill it will comple it reading operation.
 *
 *         but on the other hand we we use async file read operation it will push async operation to libuv.
 *         event loop will pass to one thread to perfrom that operation, in mean time all the
 *         other sync operation will me running at that time. when the read operatioin will be
 *         completed by thread it will give back to event loop then event loop will give back to
 *         callstack to perform that same task. by that we can stop degrading the performance in nodejs
 *
 */

//! 6) Design a user-defined module that wraps fs.readFileSync and fs.writeFileSync in Promises and expose methods that can be awaited in another script.

let fs = require("fs");

function readFileAsync(path){
  let promise = new Promise((resolve,reject)=>{
    resolve(fs.readFileSync(path,"utf-8"))
    reject("not resolved");
  });
  return promise;
}

function writeFileAsync(path,data){
  let promise = new Promise((resolve,reject)=>{
    resolve(fs.writeFileSync(path,data,"utf-8"))
    reject("not resolved");
  });
  return promise;
}

module.exports = {readFileAsync,writeFileAsync};



//! 7) Build a simple server using the http moduel that:
// ==> accepts GET /users -> return a mock JSON user list
// ==> accepts GET/ about -> display an about page

// const fs = require("fs");
// const http = require("http");
// http
//   .createServer((req, res) => {
//     let endPoint = req.url;

//     let obj = {
//                 name:"Chaam",
//                 age:23
//             }

//     //* if endPoint is "/about"
//     if (endPoint === "/about") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       fs.createReadStream("./about.html", "utf-8").pipe(res);
//     }   //* if endPoint is "/about"
//     else if (endPoint === "/user") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//        res.end(JSON.stringify(obj));
//       }
//  else {
//       res.writeHead(404, { "Content-Type": "text-html" });
//       res.end("<h1>Page not Found</h1>");
//     }
//   })
//   .listen(9000, (error) => {
//     if (error) console.log(error);
//     console.log("Server is running");
//   });

//! 8) Write a nnode js script that connects to a mongo db database using the official mongodb nodejs
//!    driver after connecting inert a sample document into a students collection and retrieve all docuemtns from it

// const {MongoClient} =  require("mongodb");
// const URI = "mongodb+srv://chmnprtp:aA1$aA1$@namastenode.qzipaix.mongodb.net/";
// const client = new MongoClient(URI);
// const dbName = "HelloWorld"

// async function main() {

//    await client.connect();
//    console.log('Connected successfully to server');
//    const db = client.db(dbName);
//    const collection = db.collection('students');



//    // insert
//    const data = {
//        firstname:"Rajat",
//        lastname:"Pratap",
//        city:"G.Noida",
//        phoneNumber:"9876567893",
//    }

//    const insertResult = await collection.insertMany([{data}]);
//    console.log('Inserted documents =>', insertResult);

//    // Read data from Database
//    const findResult = await collection.find({}).toArray();
//    console.log('Found documents =>', findResult);

//    return 'done.';
//  }

//  main()
//  .then(console.log)
//  .catch(console.error)
//  .finally(() => client.close());
