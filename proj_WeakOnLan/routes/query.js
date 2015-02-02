//query.js
var conn=require("../daos/conn");
var express = require('express');
var router = express.Router();
conn.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
 	
	conn.query("select * from machines",function(err, rows, fields){
		console.log(rows);
		res.send(rows);
		res.end();
	});
	
});

module.exports = router;
