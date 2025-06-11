//! 1) before installing any third party modules, we have to make sure tha ta file name "package.json"
//! is present in the project folder

//? to create a .json file type command ==> "npm init -y" in the terminal

//! 2) now install the required modules by typing command ==> "npm install/i module-name"
//! in the terminal
//? example ==> npm i mongodb // npm install mongodb

//! 3) now import the installed modules

const mongodb = require("mongodb");
console.log(mongodb);
//* MongoClient ==> it help us to establish the connection between node program and mongodb database
//* connect ==> it help us to connect to the database
//------------------------------
// let output = mongodb.MongoClient.connect("mongodb://localhost:27017");
// console.log(output);
//------------------------

let connectDB = async () => {
  //! 1)establish a connection ==> using MongoClient.connect("url")
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  // console.log(client);
  // console.log(client.db)

  //! 2) create a database
  let database = client.db("NodeDB");
  // console.log(database);
  // console.log(database.createCollection)

  //! 3) create collection ==> database.createCollection("collection-name")
  let collection = await database.createCollection("nodeCollection"); //return promise
  // console.log(collection);
  // console.log(collection.insertOne);

  //? CRUD
  //* ================= create/inserting/adding a document
  // ==========adding a single document
  
    let data = await collection.insertOne({ name: "abc", age: 28 }); // every database call return promise
    console.log(data);
    console.log("document inserted");
  

  // ========== adding multiple data
  // let multipleData = await collection.insertMany([
  //     {name:"def",age:29},
  //     {name:"ghi",age:19,email:"chmn@gmail.com"},
  // ]);
  // console.log(multipleData);
  // console.log("data added");

  //* =================== reading/fetching/ getting documents(s)
  // ==================== fetching a single document
  // let data = await collection.findOne();
  // console.log(data);

  // let data1 = await collection.findOne({email:"chmn@gmail.com"});// if data is not present null
  // console.log(data1);

  // ==================== fetching multiple data
  // let data2 = await collection.find(); //it return a cursor(pointer) -> mongoshell-return 20 -->
  // // console.log(data2);
  // let arrayData = data.toArray(); // toArray() ==> it is used to convert the cursor into an array
  // console.log(arrayData);

  //* ===================updating /modifying documents(s)
  // ================== updating a single document
  // let updatedData = await collection.updateOne({name:"abc"},{$set:{email:"chmnprtp@gmail.com"}}); //updation
  // console.log(updatedData)
  // console.log("data updated");

  // ================== updating multiple data
  // let updateData = await collection.updateMany({},{$set:{hrsWorked:10}});
  console.log(updateData);

  // let updateData1 = await collection.updateOne({name:"def"},{$unset:{age:""}});

  //* =================== deleting /removing documents(s)
  // ================== updating a single document
  // ================== updating multiple data
};

connectDB();
