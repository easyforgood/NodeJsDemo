//reuqire library
var conn=require("../daos/conn");
var express = require('express');
var router = express.Router();
conn.connect();
/* GET users listing. */
router.post('/', function(req, res, next) {
	var username=req.body.username;
	var pwd=req.body.password;
	conn.query('select * from login', function(err, rows, fields) {
    		if (err) throw err;
   		for(var i=0;i<rows.length;i++){
   			////luojipanduan
   			console.log(rows);
   			console.log(username);
   			console.log(pwd);
   			if(rows[i].username == username && rows[i].password == pwd){
   				res.send("success");
   			}
   			else{
   				res.send("failed");
   			}
   			res.end();
   		}
	});
	
});

module.exports = router;
