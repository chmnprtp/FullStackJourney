// npm i express mongoose

const express = require("express");
const { connectDB } = require("./config/database");

const userRoutes = require("./routes/user.routes")

//! db connection
connectDB();

const app = express();

//!middleware
app.use(express.json());
app.use("/api",userRoutes);

app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("Server is running on 9000");
})

