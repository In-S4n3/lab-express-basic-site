const express = require("express");
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

app.set("views", __dirname + "views");

// This is our first route
app.get("/", (request, response, next) => {
  //console.log(request);
  response.sendFile(__dirname + "/views/home.html");
});

// Cat route
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// Starts the backend server listening on port 3000
app.listen(3000, () => {
  console.log("Someone is hitting the app");
});
