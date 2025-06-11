//! MongoDb is a open-source , cross-platform document-oriented database program. 
//* https://mongodb.github.io/node-mongodb-native/6.16/
// Go to mongodb
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install MongoDB compass
 
const {MongoClient} =  require("mongodb");
 const URI = "mongodb+srv://chmnprtp:aA1$aA1$@namastenode.qzipaix.mongodb.net/";
 const client = new MongoClient(URI);
 const dbName = "HelloWorld"

 async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // Read data from Database
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // insert
    const data = {
        firstname:"Rajat",
        lastname:"Pratap",
        city:"G.Noida",
        phoneNumber:"9876567893",
    }

    const insertResult = await collection.insertMany([{data}]);
    console.log('Inserted documents =>', insertResult);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());