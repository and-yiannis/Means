var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Good bye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("Meows!!");
});

app.get("*", function(req, res){
    console.log(req)
    res.send("You are a star!!!");
});

app.listen(3001, 'localhost', function(){
    console.log("Server has started!!!");
});
