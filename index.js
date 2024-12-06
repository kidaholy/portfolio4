const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { console } = require("inspector");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
  var fName = req.body.name;
  var sName = req.body.email;
  var email = req.body.message;

  res.send(fName + "<br>" + sName + "<br>" + email);
});

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
