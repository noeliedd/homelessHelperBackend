var User = require('../models/user');

module.exports.addUser = function(req,res){
  var user = new User(req.body);
  user.save(function (err, result) {
    res.send({result: "double"});    
  });
}
module.exports.loginUser = function(req,res){
  console.log(req.body);
  User.find({email:req.body.email,password:req.body.password},function(err, user){
   if(err){
     res.send(err);
   }else{
      if(!user.length){
        console.log("it doesnt exist");
        res.send("Invalid Username or password");
      }else{
        console.log("Its in the database");    
        res.send("Valid Credentials");
      }
   }
  })
 /* var user = new User();
  var username = req.body.username;
  var password = req.body.password;
  user.query({name : username, password: password},function (err, result) {
    res.send(result);
  });*/
}