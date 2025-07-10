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

// route for fun fact API for the coffee shop's digital screen//
app.get("/api/fun-fact", async (req, res) => {
  try {
    console.log("Fetching fun fact from external fun-fact API...");
    // make a request to useless facts API//
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random")
    console.log("Successfully fetched a fun fact:",response.data.text);
    // extract only the text of the fun fact and send cleaned up response//
    res.json({
      fact:response.data.text,
    });
  } catch(error) {
    console.error("Error fetching the fun fact",error.message);
    // send generic error message to the client//
    res.status(500).json({
      error:"Could not fetch the fun useless fact",
    });
  }
  });

// start the server and listen on the specified  PORT//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the homepage`);
  console.log(`Visit http://localhost:${PORT}/contact to view the contact page`);
  console.log(`Visit http://localhost:${PORT}/api/fun-fact to get a random fun fact`)
});