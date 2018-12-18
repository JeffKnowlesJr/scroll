console.log("inside of posts.js");

const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

let options = {
  new:true,
  runValidators:true
}

class Posts {
  create(req, res){
    let post = new Post(req.body);
    post.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        User.findOneAndUpdate({_id: req.params.id}, {$push: {posts: post}}, options, function(err, data){
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
    Post.findOne({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        let postId = req.params.id;
        Post.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.title, rating: req.body.contents}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            let updatedPost = data;
            User.findOne({_id: req.params.userid}, function(err, data){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                let postArray = data.posts;
                let postIndex = postArray.findIndex(i => i._id == postId);
                postArray[postIndex] = updatedPost;
                User.findOneAndUpdate({_id: req.params.userid}, {$set: {posts: postArray}}, options, function(err, data){
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
    Post.findByIdAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
}

module.exports = new Posts();
