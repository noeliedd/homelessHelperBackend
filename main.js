//Dependencies
var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    user = require('./server/controllers/user-controller.js'),
    helloCtrl = require("./server/controllers/helloCtrl.js");

// MongoDB
    mongoose.connect('mongodb://localhost:/homelesshelper');

    app.use(bodyParser.json());

    app.get("/", function(req, res){
     res.sendFile('client/views/index.html', { root: __dirname });
    });
    app.use('/js', express.static(__dirname + '/client/js'));
    app.post("/api/hello", helloCtrl.hello);

//REST API
    app.post("/api/addUser", user.addUser);
    app.post("/api/loginUser", user.loginUser);

// Start Server  -Change the port 
    app.listen(3000,function(){
      console.log("Im Listening...");
    })