//! 3 tier architecture ==> req-res ==> some protocol ==> http
// different http methods

//* get  ==> it is used to feth resource/data from the server 
//* post ==> it is used to send the resource/data to the server
//* delete==>it is used to delete the resource/data from the databse
//* put  ==> 
//* patch==> put and patch both are used to update the resource

//? http is a moduel in NodeJs, which is used to create servers.

//? Steps to create a server
//* 1) import http module
//* 2) use createServer() to create a server, which accepts a callback function
//* 3) AND THAT CALLBACK FUNCTION ACCEPTS TWO PARAMETER REQ AND RES.
//* 4) assign a port number with the help of listen(), passing the callback is not mandatory


//!------------------------------------
/*
const http = require("http")
// console.log(http)
// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

let server = http.createServer((req,res)=>{ // aceepts one callback function
    //! if we want to display any message on the UI
    // res.write("Hello from Server, used write method")
    //------------------------------------
    // console.log("hi")
    // res.end(); // it is used to terminate the req-res cycle, after this nothing will execute
    //------------------------------------

    // res.end("message passed from server from end"); // it can also send message
    // res.write("after end ") // cannot write after end()
    //------------------------------------
    
    // res.end(req);
    console.log(req.method); //! not working
    console.log(res);

}); 
server.listen(9000,()=>{
    console.log("Server is running")
}); // to give output to console we can pass callback

*/
//!------------------------------------

//? to tap into the server go to browser and type localhost:port_number
//? to kill the server to got the terminal and press "ctrl +c"
//? after every modification , we have to kill the server and save the changes and start rhe server again

/*
req = {
    app:
    body:   // whatever data we store in body
    headers:
    cookies:
    date:
    method:
    ..
    ..
    ..
}
*/

/*
res ={
    statusCode:
    headers:
    contentLength:
    connection-type
    cookies:
    ..
    ..
    ..
}
*/


//!    ===============  sending html content to the client ============
//? before sending the content we have to set the headers ==> writeHead()
//? writeHead(statusCode,{"Content-Type"})
// statusCode ==> 1xx(informational),
//                2xx(success)
//                3xx(redirecting)
//                4xx(client-error)
//                5xx(server-error)

// content-type ==> the data which you are sending as a response
// ==> html: text/html
// ==> css:  text/css
// ==> js :  application/js
// ==> json: application/json ==> it is language independent
//!------------------------------------
/*
const http = require("http");
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Heading from write</h1>")
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello </h1>
        <form action="">
            <label for="username">Username</label>
            <input type="text" name="" id="username">
            <label for="password">Password</label>
            <input type="text" name="" id="password">
        </form>
    </body>
    </html>`);
});

server.listen(9000,()=>{
    console.log("Server is running")
})
*/
//!------------------------------------
//TODO - not working
// const fs = require("fs")
// const http = require("http");
// let server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//    let htmlContent = fs.readFile("./Pages/index.html","utf-8")
//    res.write(htmlContent);
//    res.end();
// });

// server.listen(9000,()=>{
//     console.log("Server is running")
// })

//!-----------------------------------------
//? Using createReadStream

/*
const fs = require("fs")
const http = require("http");
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let readInChunks = fs.createReadStream("./Pages/index.html","utf-8") //source
    //destination ==> res

    readInChunks.pipe(res); //pipe() is internally calling end();
});

server.listen(9000,()=>{
    console.log("Server is running")
})
*/
//!-----------------------------------------


//!    ===============  sending css content to the client ============
// const fs = require("fs")
// const http = require("http");
// let server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/css"});
//    fs.createReadStream("./Pages/styles.css","utf-8").pipe(res);
// });

// server.listen(9000,()=>{
//     console.log("Server is running")
// })


//!    ===============  sending json content to the client ============
// const fs = require("fs")
// const http = require("http");
// let server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/json"});
//    fs.createReadStream("./Pages/data.json","utf-8").pipe(res);
// });

// server.listen(9000,()=>{
//     console.log("Server is running")
// })



//!    ===============  sending js object content to the client ============
// const fs = require("fs")
// const http = require("http");
// let server = http.createServer((req,res)=>{
//     let obj = {
//         name:"Chaam",
//         age:23
//     }

//     res.writeHead(200,{"Content-Type":"application/json"});
//    res.end(JSON.stringify(obj));
// });

// server.listen(9000,()=>{
//     console.log("Server is running")
// })



//!    ===============  nodeJs website url homepage ==> https://nodejs.org/en/  ==? '/'    ==> this is the default endpoint for home/landing page ============
//! endpoint are part of api
//? let x = https://nodeJs.org/en   
//? about page ==> https://nodejs/en/about/  ==> "/about"
//? download page ==> https://nodejs/en/download/  ==> "/download"
//? docs page ==> https://nodejs/docs/latest/api/  ==> "/docs/latest.api"
 
//? these are called as endpoints
//? handling user's multiple endpoint requests is called as routing

// const http = require("http")
// http.createServer((req,res)=>{
//     console.log(req.url); // '/'
// }).listen(9000,(error)=>{
//     if(error) console.log(error)
//     console.log("server runnning")
// })


//----------------------------------------------------------

//! =================   Displaying html css json page ==================
// const http = require("http")
// http.createServer((req,res)=>{
//     console.log(req.url); // '/'
//     let endPoint = req.url;
//     //* displayng html page
//     if(endPoint === "/html")
//         {
//             res.end("html page")
//             //* displayng css page
//         }else if(endPoint === "/css"){
//             res.end("Css page");
//         }else if(endPoint === "/json"){
//             res.end("json page");}  //* displayng css page
//             else{
//             res.end("Page not Found")
//         }

// }).listen(9000,(error)=>{
//     if(error) console.log(error)
//     console.log("server runnning")
// })

//! =================   Create a dummy nodeJs weebsite using routing ==================
const fs = require("fs")
const http = require("http");
http.createServer((req,res)=>{
    let endPoint = req.url;
    //* if endPoint is "/"
    if(endPoint === "/"){
        res.setHeader("myHeader","abc"); // custom header
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.createReadStream("./Pages/index.html","utf-8").pipe(res);
    }
    //* if endPoint is "/about"
    else if(endPoint === "/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.createReadStream("./Pages/about.html","utf-8").pipe(res);
    }
    //* if endPoint is "/download"
    else if(endPoint === "/download"){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.createReadStream("./Pages/download.html","utf-8").pipe(res);
    }else{
        res.writeHead(404,{"Content-Type":"text-html"});
        res.end("<h1>Page not Found</h1>")
    }
}).listen(9000,(error)=>{
    if(error) console.log(error);
    console.log("Server is running")
})