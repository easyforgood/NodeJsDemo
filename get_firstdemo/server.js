var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.end("your param name= "+ url.parse(req.url,true).query.name);
    console.log(url.parse(req.url,true));
   
}).listen(3001);
