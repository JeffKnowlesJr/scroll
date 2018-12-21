console.log("inside of users.js");

const mongoose = require("mongoose");
const User = mongoose.model("User");
// const session = require('express-session');

let options = {
  new:true,
  runValidators:true
}

// Basic CRUD

class Users {
  create(req, res){
    User.findOne({username: req.body.username}, function(err, data){
      console.log(data);
      if(data){
        res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This username already exists in the database"}}}});
      } else {
        User.findOne({email: req.body.email}, function(err, data){
          if(data){
            res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This email already exists in the database"}}}});
          } else {
            let user = new User(req.body);
            user.save(function(err){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                console.log('successful register')
                req.session.user_id = user._id;
                req.session.logged_in = true;
                console.log(req.session)
                res.json({"status": "ok", "user": data, "session": req.session});
              }
            });
          }
        })

      }
    })
  }
  getUser(req, res){
    User.findOne({email: req.body.email}, function(err, data){
      console.log("This is req.body", req.body);
      console.log("this is the data", data);
      if(req.body.email == ''){
        res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "Email cannot be blank"}}}});
      } else if(!data) {
        res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "No account associated with this email. Please create an account."}}}});
      } else if(data.password != req.body.password) {
        res.json({"status": "not ok", "errors": {"errors": {"password": {"message": "Incorrect password."}}}});
      } else {
        if(err) {
            res.json({"status": "not ok", "errors": err});
        } else {
          req.session.user_id = data._id;
          req.session.logged_in = true;
          console.log(req.session);
          res.json({"status": "ok", "user": data, "session": req.session});
        }
      }
    });
  }

  getUserById(req,res){
    if(req.session.logged_in != true){
      console.log("this is session from getUserById", req.session)
      res.json({"status": "not ok", "errors": {"errors": {"not_logged_in": {"message": "Please login"}}}});
    } else {
      User.findById(req.session.user_id, function(err, data){
        res.json({"status": "ok", "user": data, "session": req.session});
      })
    }
  }

  logout(req,res){
    req.session.destroy();
    console.log("User logged out. Clearing session and redirecting to index.", req.session)
    res.json({"status": "ok"});
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
    User.findOneAndUpdate({_id: req.params.id}, {$set: {password: req.body.password, icon: req.body.icon, username: req.body.username, email: req.body.email}}, options, function(err, user){
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
