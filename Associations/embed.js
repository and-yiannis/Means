var mongoose = require("mongoose");

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


//var newUser = new User({
//    email: "hermione@hogwarts.edu",
//    name: "Hermione Granger"
//});
//
//newUser.posts.push({
//    title: "How to brew polyjuice potion",
//    content: "Just kidding. Go to potions class to learni it!"
//});
//
//newUser.save(function(err, user){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(user);
//    }
//});

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "Things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});


//var newPost = new Post({
//    title: "Refletions on apples",
//    content: "They are delicious"
//});
//
//newPost.save(function(err, post){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(post);
//    }
//});

