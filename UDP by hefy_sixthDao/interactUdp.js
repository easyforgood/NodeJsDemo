var express = require('express');
var app = express();
var dgram = require('dgram');


var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

app.post("/",parseUrlencoded, function(request, response){
    var message = new Buffer(request.body.message.toString());
    console.log(request.body.message);
    var client = dgram.createSocket("udp4");
    
    client.send(message, 0, message.length, 41234, "localhost", function(err, bytes){
        console.log("send now"+message);
        
        client.on("message", function(msg, rinfo){
            console.log("server got: " + msg + " from " +
                rinfo.address + ":" + rinfo.port);
            response.writeHead(200);
            response.write(msg);
            response.end();
            client.close();
        });
    });
});

app.get('/',function(request, response){
    response.sendFile(__dirname + '/interact.html');
});

app.listen(5544);
