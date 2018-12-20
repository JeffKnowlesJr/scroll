console.log("inside of users.js");

const mongoose = require("mongoose");
const User = mongoose.model("User");

let options = {
  new:true,
  runValidators:true
}

// Basic CRUD

class Users {
  create(req, res){
    User.findOne({email: req.body.email}, function(err, user){
      if(user){
        res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This email already exists in the database"}}}});
      }
    })
    User.findOne({username: req.body.username}, function(err, user){
      if(user){
        res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This username already exists in the database"}}}});
      }
    })
    
    let user = new User(req.body);
    user.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": user});
      }
    });
  }
  getAll(req, res){
    User.find({}, function(err, users){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "users": users});
      }
    });
  }
  update(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, {$set: {password: req.body.password, username: req.body.username, email: req.body.email}}, options, function(err, user){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
  delete(req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
}
module.exports = new Users();
