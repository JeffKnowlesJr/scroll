console.log("inside of user.js");

const mongoose = require("mongoose");
const PostSchema = require("./post");

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "User must have a name"],
      maxlength: [255, "Posts must be maxX 255 characters"]
    },
    style: {
      type: String,
      required: [true, "Food style is required"],
      minlength:2,
      maxlength: [255, "style must be maxX 255 characters"]
    },
    // note in depth validations for min length
    description: {
      type: String,
      required: [true, "Food description is required"],
      minlength:[10, "Posts must be at least 10 characters"],
      maxlength: [255, "description must be maxX 255 characters"]
    },
    avgRating: {
      type: Number
    },
    posts: [PostSchema]
    // timestamps createdAt updatedAt
}, {timestamps: true});

// Setting the name of our user here
mongoose.model('User', UserSchema);

// One to many between Trucks and Posts
// Food Truck
//   Name (string)
//   Style (string)
//   Description (string)
//   Posts [] (Post Objects)
//   Avg Rating (Number)
