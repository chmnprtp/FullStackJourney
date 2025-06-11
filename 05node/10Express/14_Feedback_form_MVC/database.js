let mongodb = require("mongodb");

//! create db connection method
let connectDB = async () => {
    //! create a connection
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017"); // returns a Promise that resolves to a MongoClient object
    //! create a database
    let database = client.db("feeback_form_mvc");
     //! create a collection
    let collection = database.collection("feedbacks"); // just reference it, no createCollection
    //! return collection
    return collection;
}
module.exports = {connectDB};

/*
 mongodb = {
    MongoClient(){
        connect()
    }
 }
 */

//  emp ={
//     address:{
//         city:"sirsa",
//         state:"UP"
//     }   
//  }
//  console.log({address:[city]=emp});