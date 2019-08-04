var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var Cgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"},
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:Cgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    Cgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000., 'localhost', function(){
    console.log("The YelpCamp Has Started!");
});





