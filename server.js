// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require  Schemas
var Employees = require('./models/Employees.js');
var eNots = require('./models/Notes.js');

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/loftapp_db");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// At the "/api" path, display every entry in the employees collection
app.get("/api", function(req, res) {
    console.log("inside app.get /api in server.js");
  // Query: In our database, go to the employees collection, then "find" everything
//
    Employees.find({}, function(error, found) {
    // Log any errors if the server encounters one
        if (error) {
            console.log(error);
         }
    // Otherwise, send the result of this query to the browser
         else {
             res.json(found);
             console.log(found);
         }
    })
});

// This is the route we will send POST requests to save a new employee.
// We will call this route when a user signs up
app.post("/api", function(req, res) {
   console.log("adding an employee! app.post");

});

// -------------------------------------------------
// Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------------
// app.get("/SignUp", function(req, res) {
//   res.send("__dirname" + "/components/children/SignUp.js");
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
