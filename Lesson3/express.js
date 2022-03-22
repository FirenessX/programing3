var port = 8888;
var express = require("express");
var app = express();

// app.use(express.static("."));
app.get("/", function(req, res){
   res.send("<h1>Hello </h1>");
});

app.get("/name/:name", function(req, res){
    let name = req.params.name
   res.send("<h1>Hello " + name + "</h1>");
});

app.listen(port, function(){
   console.log("Example is running on port " + port);
});
