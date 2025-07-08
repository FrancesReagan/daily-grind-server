// ServiceWorker.js//
// import express libary//
const express = require("express");

// import built-in path module//
const path = require("path");

// create an instance of an express application//
const app = express();

// define the port number//
const PORT = 3000;

// serve static files from the public directory//
// this allows CSS, images, and other static files to be accessed directly//
app.use(express.static("public"));

// route handler for GET requests to the root URL(/)//
app.get("/", (req, res) => {
  // send the index.html file from the public directory//
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// route handler for GET requests to /contact//
app.get("/contact", (req, res)=>{
  // send the contact.html file from the public directory//
  res.sendFile(path.join(__dirname,"public","contact.html"));
});

// start the server and listen on the specified port//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the homepage`);
  console.log(`Visit http://localhost:${PORT}/contact to view the contact page`);
});