// require express
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// sets up the public folder's static content to use express
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Grabs the routes from the burgersController.js file
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Start the server to listen to the client
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
