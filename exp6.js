const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const mongodb_url = "mongodb://localhost:27017";
const client = new MongoClient(mongodb_url);
// Database Name
const dbName = "webTech";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  let formData = req.body.formData;
  console.log("received data :", formData);
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const insertResult = await collection.insertOne(formData);
  console.log("insert result :", insertResult);
  res.send(insertResult.acknowledged);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  
  await client.connect();
  console.log("Connected successfully to server");
});