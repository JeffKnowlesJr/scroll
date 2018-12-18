console.log("inside of post.js");

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
    // Post Model Attribute Title
      type: String,
      required: [true, "Post must have a title."],
      maxlength: [255, "Title must be less than 255 characters."]
    },
    // Post Model Attribute Contents
    contents: {
      type: String,
      required: [true, "Post must have contents."],
      maxlength: [2000, "Contents must be less than 2000 characters."],
      minlength: [5, "Contents must be at least 5 characters"]
    },
    // Post Model Attribute Chat_id
    chat_id: {
      type: String
    }
  },
  {timestamps: true}
);

mongoose.model('Post', PostSchema);

// Required for post to be accessable from user.js
module.exports = PostSchema;
