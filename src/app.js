const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// VIEWS ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "/public/views"));

// STATIC
app.use(express.static(path.join(__dirname, "..", "/public")));

// ROUTE
app.get("/", (req, res) => {
  res.render("index");
});

// SERVER LISTENING
const http = require('http').createServer(app)

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
