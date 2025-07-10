// mod 12 lesson 6 Lab2//
//daily grind with axios -- fun facts api//
//import express library//
const express = require ("express");
// import axios for API requests//
const axios = require ("axios");
// import built-in path module//
const path = require ("path");
// create an instance of an express application//
const app = express();
// define the port number//
const PORT = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})