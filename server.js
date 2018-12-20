const express = require("express"),
           bp = require("body-parser"),
          app = express(),
      db_name = "scroll",
      session = require('express-session'),
      path = require('path'),
         port = 8888;

app.use(bp.json());
app.use(express.static( __dirname + '/client/dist/client' ));
app.use(session({
    secret: 'thisisoursupersecretkey!',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
})); 

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.all('*', (req, res, next) =>{
    res.sendFile(path.resolve('./client/dist/client/index.html'));
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
