console.log("inside of routes.js");

const Users = require("../controllers/users");
const Posts = require("../controllers/posts");
const Comments = require("../controllers/comments");

module.exports = function(app){
  app.get("/users", Users.getAll);
  app.post("/users", Users.create);
  app.put("/users/:id", Users.update);
  app.delete("/users/:id", Users.delete);
  app.get("/posts", Posts.getAll);
  app.post("/posts/:id", Posts.create);
  app.put("/posts/:id", Posts.update);
  app.delete("/posts/:id", Posts.delete);
  app.post("/comments/:id", Comments.create);
  app.put("/comments/:id", Comments.update);
  app.delete("/comments/:id", Comments.delete);
}
