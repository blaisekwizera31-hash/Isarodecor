var http = require("http");
var server = http.createServer(function(req, res){
    if(req.url =="/"){
        res.end("Hello hello this is my first API")
    }
    else if(req.url =="/students"){
        res.end("Are you a student? Work hard")
    }
    else{
        res.end("Bro try again later!")
    }
})

server.listen(3001)
console.log("Server running")