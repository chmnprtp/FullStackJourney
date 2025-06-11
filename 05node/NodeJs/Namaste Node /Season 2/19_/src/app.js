const express = require("express");
const app = express();
require("./config/database"); // when we require this file - its code also runs
const connectDB = require("./config/database")
const User = require("./models/user");


app.post("/signup",async (req,res)=>{
    const userObj = {
        firstName:"Akshay",
        lastName:"Saini",
        emailId:"chmnprtp@gmail.com",
        password:"myPass"
    }
    const user = new User(userObj); // creating a new instance of a user Model

    try {
        await user.save(); // this function return a Promise
        // most mongoose function return Promise
        res.send("User added successfully");
    } catch (error) {
        res.status(400).send("Error saving the user"+error.message);
    }
     
})

connectDB().then(()=>{
    console.log("Database connection established....")

    app.listen(7777,()=>{
        console.log("Server is running on 7777");
    })
}).catch((err)=>{
    console.error("Database cannot be connected");
})




// right process is first connect to database then connect to server