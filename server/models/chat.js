console.log("inside of chat.js");

const mongoose = require("mongoose");
const CommentSchema = require("./comment");

const ChatSchema = new mongoose.Schema(
  {
    name: {
    // Chat Model Attribute Name
      type: String,
      required: [true, "Chat must have a name."],
      maxlength: [255, "Name must be less than 255 characters."]
    },
    // Chat Model Attribute Post_id
    post_id: {
      type: String
    },
    // Chat Model Messages Array
    comments: [CommentSchema]
  },
  {timestamps: true}
);

mongoose.model('Chat', ChatSchema);

// Required for chat to be accessable from user.js
module.exports = ChatSchema;
