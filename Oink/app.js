var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    if (animal === 'dog'){
        res.send("The dog says 'Woof Woof!'");
    } else if (animal === 'cow'){
        res.send("The cow says 'Moo'");
    } else if (animal === 'pig'){
        res.send("The pig says 'Oink'");
    } else{
        res.send("I don't know what " + animal + " says");
    }
});

app.get("/repeat/:word/:n", function(req, res){
    var n = Number(req.params.n)
    console.log(n)
    var s = ''
    for (var i = 0; i < n; i++){
        s += req.params.word + ' '
    }

    res.send(s);
    

});
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3001, 'localhost');
