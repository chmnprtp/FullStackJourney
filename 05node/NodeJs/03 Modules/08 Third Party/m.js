const mongodb = require("mongodb");

let connectDB = async () => {
  try {
    // 1. Connect to MongoDB
    let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

    // 2. Select the database
    let database = client.db("NodeDB");

    // 3. Check if the collection already exists
    const collections = await database.listCollections({ name: "nodeCollection" }).toArray();

    let collection;
    if (collections.length === 0) {
      console.log("Collection does not exist. Creating...");
      collection = await database.createCollection("nodeCollection");
    } else {
      console.log("Collection exists. Using existing collection...");
      collection = database.collection("nodeCollection");
    }

    // 4. Insert a document
    const result = await collection.insertOne({ name: "abc", age: 28 });
    console.log("Document inserted with ID:", result.insertedId);

    client.close();
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};

connectDB();
