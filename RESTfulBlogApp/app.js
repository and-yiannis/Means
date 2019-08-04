var bodyParser = require("body-parser"),
    express = require("express"),
    mongoose = require("mongoose"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//Blog.create({
//    title: "Test Blog",
//    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
//    body: "HELLO THIS IS A BLOG POST!"
//})



//RESTFUL ROUTES
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.listen(3000, 'localhost', function(){
    console.log("SERVER IS RUNNING!");
});

