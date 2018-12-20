console.log("inside of comment.js");

const mongoose = require("mongoose");
const UserSchema = require("./user");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
    // Comment Model Attribute Name
      type: String,
      required: [true, "Comment is required."],
      maxlength: [400, "Comment must be less than 400 characters."]
    },
    // Post Model Attribute Creator_id
    creator_id: {
      type: String,
      required: [true, "Post must have a creator."]
    },
    // Post Model Attribute Creator_name
    creator_name: {
      type: String,
      required: [true, "Post must have a creator."]
    }
  },
  {timestamps: true}
);

mongoose.model('Comment', CommentSchema);

// Required for comment to be accessable from user.js
module.exports = CommentSchema;
