console.log("inside of chats.js");

const mongoose = require("mongoose");
const Chat = mongoose.model("Chat");
const User = mongoose.model("User");

let options = {
  new:true,
  runValidators:true
}

class Chats {
  create(req, res){
    let chat = new Chat(req.body);
    chat.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": chat});
      }
    });
  }
  getAll(req, res){
    Chat.find({}, function(err, chats){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "chats": chats});
      }
    });
  }
  update(req, res) {
    Chat.findOneAndUpdate({_id: req.params.id}, {$set: {chat: req.body.chat}}, options, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        User.findOneAndUpdate({_id: req.params.id}, {$push: {chats: chat}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            res.json({"status": "ok", "data": data});
          }
        });
        res.json({"status": "ok", "data": data});
      }
    });
  }
  delete(req, res) {
    // edit to remove chat from user array
    Chat.findByIdAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }
}
module.exports = new Chats();
