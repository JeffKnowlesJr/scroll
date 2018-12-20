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
