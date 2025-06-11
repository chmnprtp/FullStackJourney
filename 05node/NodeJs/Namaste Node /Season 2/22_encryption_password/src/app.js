const express = require("express");
const app = express();
require("./config/database"); // when we require this file - its code also runs
const connectDB = require("./config/database")
const User = require("./models/user");
const validateSignupData = require("./utils/validation");
const bcrypt = require("bcrypt");


app.use(express.json()); // to read json from client

// signup the user
app.post("/signup",async (req,res)=>{
    // const userObj = {
    //     firstName:"Akshay",
    //     lastName:"Saini",
    //     emailId:"chmnprtp@gmail.com",
    //     password:"myPass"
    // }
    try {

    const {firstName,lastName,emailId,password} = req.body;
       
    // Validation of data
    validateSignupData(req);

    //Encrypt the password
    
    const passwordHash = await bcrypt.hash(password,10);
    console.log(passwordHash)

    // creating a new instance of a user Model
    const user = new User({firstName,lastName,emailId,password:passwordHash}); 

   
        await user.save(); // this function return a Promise
        // most mongoose function return Promise
        res.send("User added successfully");
    } catch (error) {
        res.status(400).send("Error saving the user"+error.message);
    }
     
})


//login the user
app.post("/login",async (req,res)=>{
    try {
        const {emailId,password} = req.body;

        // check user is present or not?
        const user = await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("Invalid Credentials");
        }
        
        // check password is valid or not
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(isPasswordValid){
            res.send("User login successFUl");
        }else{
            // console.log("Password from request:", password);
            // console.log("Hashed Password from DB:", user.password);
            return res.status(401).send("Invalid Credentials");
        }
    } catch (error) {
        throw new Error("No Login:"+error.message)
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
app.patch("/user/:userId",async(req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;
    
    try {
        // API level validation
        const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];
        const isUpdateAllowed = Object.keys(data).every(k => ALLOWED_UPDATES.includes(k));
        if(!isUpdateAllowed){
            throw new Error("Updates not allowed");
        }
        if(data?.skills.length>10){
            throw new Error("Skills cannot be more than 10");
        }
       const user =  await User.findByIdAndUpdate(userId,data,{returnDocument:"after",runValidators:true});
        res.send("User updated ");
        console.log(user);
        } catch (error) {
            res.status(500).send("Update failed:"+error.message)
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