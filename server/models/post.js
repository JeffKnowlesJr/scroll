console.log("inside of post.js");

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Poster must have a name"], maxlength:255},
    rating: {type: Number, required: [true, "Poster must enter a rating"], min:0, max:5},
    post: {type: String, required: [true, "Poster must enter a post"], minlength:10, maxlength:255},
}, {timestamps: true});

mongoose.model('Post', PostSchema);

// required for post to be accessable from user.js
module.exports = PostSchema;

// Post
//   poster Name
//   Rating
//   Post
