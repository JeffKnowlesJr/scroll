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
    req.body.creator_id = req.params.id;
    let post = new Post(req.body);
    User.findOne({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        let user = data;
        post.save(function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            Post.findOneAndUpdate({_id: post._id}, {$set: {creator_id: req.params.id}, $push: {users: user}}, options, function(err,data){
              User.findOneAndUpdate({_id: req.params.id}, {$push: {posts: post}}, options, function(err, data){
                if(err){
                  res.json({"status": "not ok", "errors": err});
                }else{
                  res.json({"status": "ok", "data": data});
                }
              });
            });
          }
        });
      }
    });
  }
  getAll(req, res){
    Post.find({}, function(err, posts){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "posts": posts});
      }
    });
  }
  update(req, res) {
    console.log("log", req.params.id);
    Post.findOne({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        console.log("log ", data);
        Post.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.body.title, contents: req.body.contents}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            console.log("log ", data);
            let updatedPost = data;
            for(user in data.users){
              User.findOne({_id: user._id}, function(err, data){
                if(err){
                  res.json({"status": "not ok", "errors": err});
                }else{
                  console.log("log ", data);
                  let postArray = data.posts;
                  let postIndex = postArray.findIndex(i => i._id == req.params.id);
                  postArray[postIndex] = updatedPost;
                  User.findOneAndUpdate({_id: user._id}, {$set: {posts: postArray}}, options, function(err, data){
                    if(err){
                      res.json({"status": "not ok", "errors": err});
                    }else{
                      res.json({"status": "ok", "data": data});
                    }
                  });
                }
              });
            }
          }
        });
      }
    });
  }
  subscribe(req, res) {
    User.findOne({_id: req.params.userid}, function(err, data){
      let user = data;
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        Post.findOneAndUpdate({_id: req.params.id}, {$push: {users: user}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            User.findOneAndUpdate({_id: user._id}, {$push: {posts: data}}, options, function(err, data){
              res.json({"status": "ok", "data": data});
            })
          }
        });
      }
    })

  }
  delete(req, res) {
    Post.findOne({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        let userId = data.creator_id;
        User.findOne({_id: userId}, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            let postArray = data.posts;
            let postIndex = postArray.findIndex(i => i._id == req.params.id);
            postArray[postIndex] = postArray[postArray.length -1];
            postArray.length = postArray.length -1;
            User.findOneAndUpdate({_id: req.params.userId}, {$set: {posts: postArray}}, options, function(err, data){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                Post.findOneAndRemove({_id: req.params.id}, function(err, data){
                  if(err){
                    res.json({"status": "not ok", "errors": err});
                  }else{
                    res.json({"status": "ok", "posts": posts});
                  }
                });
              }
            });
          }
        });
      }
    });
  }
}

module.exports = new Posts();
