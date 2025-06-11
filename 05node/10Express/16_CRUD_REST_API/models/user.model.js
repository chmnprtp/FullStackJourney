//! Steps to create a Schema
// 1) import mongoose module
// 2) define the schema/structure
// 3) make a collection and export it

//! 1
const mongoose = require("mongoose");

//! 2 ==> create an object of mongoose.Schema class
let userSchema = new mongoose.Schema({
    name:{type:String,},
    email:{type:String,unique:true,required:true,},
    password:{type:String},
    contactNo:{type:Number}
},// Options Object
{timestamps:true}
);
// In Schema Class we pass two argument - 
// first object- schema second object- we pass options like timestamps:true

//! 3 create a collection/model with the help of model("collectionName",schemaName)
let myCollection = mongoose.model("User",userSchema);  // singular and first letter capital
//first is collectioin and second is schema to follow by that collection
// collection will be created in db with the name ==> users(lowercase+plural)


//! 4 export
module.exports = myCollection;

