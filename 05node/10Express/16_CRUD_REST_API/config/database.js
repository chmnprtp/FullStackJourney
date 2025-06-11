const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb://localhost:27017/crud_api");
    console.log("DB conencted");
}

module.exports ={
    connectDB,
}
