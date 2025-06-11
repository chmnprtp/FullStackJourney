const mongoose = require("mongoose");

//! creating a user Schema
const userSchema = new mongoose.Schema({ // can also do - mongoose.Schema({})
    firstname:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String
    }

})

//! create a mongoose model
const UserModel = mongoose.model("User",userSchema) // first thing is name of model  , second thing is schema
// model name start with capital letter
module.exports = UserModel;
// module.exports = mongoose.model("User",userSchema); // some people also write this
//Schema tells about what type of user we are storing in database


//! Model
// 🔷 What is a Model?
// A model is a constructor function created from a schema. 
// It is used to create and interact with documents in a collection.

// You can think of a model as a tool or class that lets you read, write, update, 
// and delete documents in MongoDB using that schema.


//! Document
/*
📄 What is a Document?

A document is a single record in MongoDB. It's stored in JSON-like format (specifically, BSON — Binary JSON).

🔹 It’s like a row in a SQL database, but more flexible.
🔧 Example:
{
  "_id": "665fa0158a76e65c205c1d2a",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}
_id: A unique identifier automatically added by MongoDB
Fields can be strings, numbers, arrays, objects, dates, etc.
*/

//! Collection
/*
📦 What is a Collection?

A collection is a group of documents — similar to a table in SQL.

🔹 All documents in a collection are stored together, but don’t need to have the exact same fields or structure.
🔧 Example:
You might have a collection called users:

users
 ├── { "_id": ..., "name": "Alice", "email": ... }
 ├── { "_id": ..., "name": "Bob", "email": ..., "age": 30 }
 └── { "_id": ..., "name": "Carol" }
Each document can look different, but they live in the same collection.
*/


//! __v - when we update data , it maintain version of it
//! _id - whenever you add any data to mongodb , mongodb automatically created it