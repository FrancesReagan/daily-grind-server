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

// serve static files from the public directory//
// if I add --this --access CSS, images, and other static files directly//
app.use(express.static("public"));


//ROUTES//
// route handler for GET requests to the root url(/)//
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"public","index.html"));
});

// route handler for GET requests to /contact/ //
app.get("/contact", (req, res) => {
  // send the contact.html file from the public directory//
  res.sendFile(path.join(__dirname,"public","contact.html"));
});








app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})