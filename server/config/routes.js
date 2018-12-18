console.log("inside of routes.js");

const Users = require("../controllers/users");
const Posts = require("../controllers/posts");

module.exports = function(app){
  app.get("/users", Users.getAll);
  app.post("/users", Users.create);
  app.put("/users/:id", Users.update);
  app.delete("/users/:id", Users.delete);
  app.post("/posts/:id", Posts.create);
  app.put("/posts/:userid", Posts.update);
  app.delete("/posts/:id", Posts.delete);
}
