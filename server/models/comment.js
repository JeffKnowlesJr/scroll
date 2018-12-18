console.log("inside of comment.js");

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
    // Comment Model Attribute Name
      type: String,
      required: [true, "Comment is required."],
      maxlength: [400, "Comment must be less than 400 characters."]
    },
    // Comment Model Attribute User_id
    user_id: {
      type: String
    }
  },
  {timestamps: true}
);

mongoose.model('Comment', CommentSchema);

// Required for comment to be accessable from user.js
module.exports = CommentSchema;
