let mongodb = require("mongodb");

//! create db connection method
let connectDB = async () => {
    //! create a connection
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017"); // returns a Promise that resolves to a MongoClient object
    //! create a database
    let database = client.db("form-data");
     //! create a collection
    let collection = database.collection("users"); // just reference it, no createCollection
    //! return collection
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



module.exports = connectDB;