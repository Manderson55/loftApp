// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');

mongoose.Promise = global.Promise;

// Require  Schemas
const Employees = require('./models/Employees.js');
const eNots = require('./models/Notes.js');

// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({
    secret:'ilovereact',
    resave:true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());


require('./passport')();

app.use(express.static("public"));



// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/loftapp_db");
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Employees.create({firstName:'accimeesterlin'})




app.post('/signup', passport.authenticate('local-signup', {
    successRedirect:'/Schedule',
    failureRedirect:'/signup'
}));


app.post('/signin', passport.authenticate('local-signin', {
    successRedirect:'/Schedule',
    failureRedirect:'/signin'
}));


app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
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
