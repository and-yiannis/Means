var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

"/friends"
app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});


app.post("/addfriend", function(req, res){
  var newFriend = req.body.newfriend; 
  friends.push(newFriend);
  res.redirect("/friends");
});

app.listen(3001, 'localhost', function(){
    console.log("Server started!!!");
});

