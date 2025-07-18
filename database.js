const { username, password } = require("./key.js");
//MongoClient helps connect to Mongo Deployment
const { MongoClient } = require("mongodb");

//Connection String from Atlas: -
const URI =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@demomongo.e3xahte.mongodb.net/";

//instatiate MongoClient
const client = new MongoClient(URI);

async function main() {
  //Connect MongoClient instance to your deployed cluster with your connection string
  await client.connect();
  console.log("Connected successfully to server.");

  //connect to database using client.db(database_name);
  const db = client.db("DemoDatabase");

  //get the collection ~ table in database using db.collection(collection_name);
  const collection = db.collection("DemoCollection");

  //Insert documents
  const doc_1 = {
    firstname: "Beth",
    lastname: "Angelin",
    age: "45",
    phonenumber: "1234567890",
  };
  const inserted_doc = await collection.insertMany([doc_1]);
  console.log("Inserted Documents: " + inserted_doc);

  //Find Documents
  const find_docs = await collection.find({}).toArray();
  console.log("Fetched Documents: " + find_docs);

  return "done";
}

main()
  .then(console.log())
  .catch(console.error)
  .finally(() => client.close());

//client.close() to close the connection
