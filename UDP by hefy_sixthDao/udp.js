var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    server.close();
});

server.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from " +
        rinfo.address + ":" + rinfo.port);
    server.send(msg, 0, msg.length, rinfo.port, rinfo.address, function(err, bytes){
        console.log("sendback now\n");
    });
});

server.on("listening", function () {
    var address = server.address();
    console.log("server listening " +
        address.address + ":" + address.port);
});

server.bind(41234);
