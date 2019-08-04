var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//    {
//        name: "Granite Hill",
//        image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7bd1944bc658_340.jpg",
//        description: "This is a huge granite hill, no bathrooms, no water, just granite.."
//    },
//    function(err, campground){
//        if(err){
//            console.log(err);
//        }else {
//            console.log("Newly created campground: ");
//            console.log(campground);
//        }
//    }
//);
//Campground.create(
//    {
//        name: "Salmon Creek", 
//        image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f712f7ed7914ec5_340.jpg"
//    },
//    function(err, campground){
//        if(err){
//            console.log(err);
//        }else {
//            console.log("Newly created campground: ");
//            console.log(campground);
//        }
//    }
//);

//var campgrounds = [
//    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f742972d1964ec2_340.jpg"},
//    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f742972d1964ec2_340.jpg"},
//    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//    {name: "Salmon Creek", image: "https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f742972d1964ec2_340.jpg"},
//    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d1464d53a514f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732e7ddd924cc65f_340.jpg"},
//];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
             res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);            
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, 'localhost', function(){
    console.log("The YelpCamp Has Started!");
});




