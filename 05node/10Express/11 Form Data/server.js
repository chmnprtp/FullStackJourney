import express from "express";
import fs from "fs";
import mongodb from "mongodb";


//! create db connection method
let connectDB = async () => {
    //! create a connection
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017"); // returns a Promise that resolves to a MongoClient object
    //! create a database
    let database = client.db("form-data");
     //! create a collection
    let collection = database.collection("users"); // just reference it, no createCollection
    return collection;
}
/**
 * You don’t need to create the collection manually. If you're only inserting data 
 * (with insertOne or insertMany), MongoDB automatically creates the collection 
 * if it doesn’t already exist.
 * 
 * database.collection("users") just gets a reference. No error if it already exists.
 * 
 * ❌ createCollection("users") — throws error if already exists
 * ✅ collection("users") — safe and preferred unless you need specific collection options
 */

const app = express();

//! middleware
app.use(express.urlencoded( // this is middleware // parse data from form
    {extended:true}         // use qs module: parsing data, queryString by default()-- drawback -> can parse nested object or nested data
));
// cocntent/type ==> form-urlencoded
// app.use(function(req,res,next){
//     statements ==> req.body modify
//     next()
// })


//! home page
app.get("/",(req,res)=>{
    res.end("home page");
})
//! form page
app.get("/form",(req,res)=>{
    // res.send("Form page show")
    fs.createReadStream("./form.html","utf-8").pipe(res);
})

//! fetching data from database
app.get("/users",async (req,res)=>{
    let myCollection = await connectDB();
    let users = await myCollection.find().toArray(); // cursor ot pointer
    res.send(users);
})
//* we can not update using html form


app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("Server running at port 9000");
})

//! handling from server
app.post("/abc",async(req,res)=>{
    //* use the same endpoint in the form action
    //* set method attribute to post
    //* use name attribute to store the data

    //? data is always stored in req.body
    console.log(req.body);

//* 1st way to destructure
let {username, useremail, userpassword} = req.body;

//* 2nd way to destructure
    // let n = req.body.username; // same as name attribute value
    // let e = req.body.useremail;
    // let p = req.body.userpassword;

    let myCollection = await connectDB();
    // console.log(myCollection);

    // myCollection.insetMany(req.body);
    myCollection.insertOne({username,useremail,userpassword})

    res.send(`user with ${useremail} has registered successfully
    other details ==> ${username} and ${userpassword}`)
})

// {
//     userName:"abc",
//     useEmail:"chm@gmail.com",
//     userPassword:"123",
// }




//! if you want to use ES format syntax ,a dd one property in package.json file ==> 

// node --watch server ==> watch mode(built mode) ==> this will only watch one file
//! nodemon ==> .js file save ==> server will restart
//? to install nodemon as development dependency ==> npm i nodemon -D
// nodemon filename

// npm i nodemon -global