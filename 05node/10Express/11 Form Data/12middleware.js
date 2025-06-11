import express from "express";

const app = express();


app.use((req,res,next)=>{ // this comes between req and res
    console.log("this is middleware 1")
    req.myname = "abc";
    next(); // it forward the request to particular callback
})

//! if no middleware is present then it wil continue the normal flow of execution
//! if other middleware are present then next() will call the next middleware
app.use((req,res,next)=>{ // this comes between req and res
    console.log("this is middleware 2")
    next(); // it forward the request to particular callback
})



app.get("/",(req,res)=>{
    res.send("landing page");
    console.log(req.myname)
})

app.get("/about",(req,res)=>{
    res.send("about page");
})


// app.get("",(req,res)=>{
//     res.send("Page not found");
// })




app.listen(9001,(err)=>{
    if(err) console.log(err)
        console.log("server running on port 9001")
})



//! middleware ==> it is a function , which comes in between req and res and has access to both req and res object
//! and it also has a next() which calls the next middleware present if not it continues the normal flow of execution

//? middleware is used with the help of use()

//* different types of middleware
// 1) custom -defined middlewares
// 2) built-in middleware
// 3) error middleware
// 4) router level middlewares
// 5) application level middleware