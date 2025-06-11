const express = require("express");
const app = express();
require("./config/database"); // when we require this file - its code also runs
const connectDB = require("./config/database")
const User = require("./models/user");


app.use(express.json()); // to read json from client

// signup the user
app.post("/signup",async (req,res)=>{
    // const userObj = {
    //     firstName:"Akshay",
    //     lastName:"Saini",
    //     emailId:"chmnprtp@gmail.com",
    //     password:"myPass"
    // }
    const user = new User(req.body); // creating a new instance of a user Model

    try {
        await user.save(); // this function return a Promise
        // most mongoose function return Promise
        res.send("User added successfully");
    } catch (error) {
        res.status(400).send("Error saving the user"+error.message);
    }
     
})

//Get single user by email
app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId;

    try {
       const user =  await User.find({emailId:userEmail})
       if(user.length === 0){
        res.status(404).send("user not found");
       }else{
        res.send(user);
       }
       
    } catch (error) {
        res.status(400).send("Something went wrong")
    }
  
})

//Feed api - GET /feed - get all the users from the database
app.get("/feed",async(req,res)=>{
    try {
        const allUser = await User.find({}) // empty filter give you all collection
        res.send(allUser);
    } catch (error) {
        res.status(400),send("Something went wrong");
    }
})


// delete user
app.delete("/user",async(req,res)=>{
    const userId = req.body.userId;
    try {
        // const user = await User.findByIdAndDelete({_id:userId})
        await User.findByIdAndDelete(userId)
        res.send("User deleted");
    } catch (error) {
        res.status(404).send("something went wrong");
    }
})

// update data of user
app.patch("/user",async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try {
        await User.findByIdAndUpdate(userId,data);
        res.send("User updated ");
    } catch (error) {
        res.status(404).send("something went wrong");
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