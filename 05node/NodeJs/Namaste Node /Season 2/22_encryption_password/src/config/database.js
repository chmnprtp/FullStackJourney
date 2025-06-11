const mongoose = require("mongoose")

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://chmnprtp:chmnprtp@namastenode.qzipaix.mongodb.net/devTinder");
    // await mongoose.connect("mongodb+srv://chmnprtp:chmnprtp@namastenode.qzipaix.mongodb.net/HelloWorld");
    //if you add database name at end it will connect to that datbase
    //if you are not adding name it is referring to the cluster 
    //if you write any name which is not already in cluster - then it will create new database
}
module.exports = connectDB;