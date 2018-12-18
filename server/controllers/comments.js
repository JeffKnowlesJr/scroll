console.log("inside of comments.js");

const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
const Chat = mongoose.model("Chat");

let options = {
  new:true,
  runValidators:true
}

class Comments {
  create(req, res){
    let comment = new Comment(req.body);
    comment.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        Chat.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            res.json({"status": "ok", "data": data});
          }
        });
      }
    });
  }
  update(req, res) {
    Comment.findOne({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        let commentId = req.params.id;
        Comment.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.title, rating: req.body.contents}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            let updatedComment = data;
            Chat.findOne({_id: req.params.chatid}, function(err, data){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                let commentArray = data.comments;
                let commentIndex = commentArray.findIndex(i => i._id == commentId);
                commentArray[commentIndex] = updatedComment;
                Chat.findOneAndUpdate({_id: req.params.chatid}, {$set: {comments: commentArray}}, options, function(err, data){
                  if(err){
                    res.json({"status": "not ok", "errors": err});
                  }else{
                    res.json({"status": "ok", "data": data});
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  delete(req, res) {
    Comment.findByIdAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
}

module.exports = new Comments();
