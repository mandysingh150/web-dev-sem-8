const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let db = new sqlite3.Database("studentData.db", (err) => {
  if (err) console.error(err.message);
  else console.log("Connected to the database");
});

// db.run(
// "CREATE TABLE studentData (fName varchar(20),lName varchar(20),rNo varchar(20),mNo
// varchar(20),eMail varchar(20),birthday varchar(20),branch varchar(20),gender varchar(10))"
// );
// db.run(`drop table studentData`);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  let formData = req.body.formData;
  console.log("received data :", formData);
  let sql =
    "INSERT INTO studentData VALUES(" +
    formData.fName +
    "," +
    formData.lName +
    "," +
    formData.rNo +
    "," +
    formData.mNo +
    "," +
    formData.eMail +
    "," +
    formData.birthday +
    "," +
    formData.branch +
    "," +
    formData.gender +
    "," +
    formData.fileInput +
    "," +
    formData.description +
    ")";
  let result = await db.run(sql);
  console.log("result :", result);
  res.send(result.acknowledgement);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port} ie. http://localhost:${port}`);
});