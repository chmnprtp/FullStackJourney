const mongodb = require("mongodb");


let connectDB = async () => {
  
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017"); // returns a Promise that resolves to a MongoClient object
   
    let database = client.db("Personal_Info");
     
    let collection = database.collection("myInfo"); // just reference it, no createCollection
    
    return collection;
}
module.exports = {connectDB};