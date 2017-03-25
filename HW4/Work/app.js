var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.get('/', function(req, res) {
	//res.send('<html><head></head><body><h1>Hello world!!!</h1></body></html>');
    //res.send(__dirname+'/index.htm');
    res.sendfile(__dirname+'/test.html');
});

app.get('/reason',function(req,res){
       res.end('<html><head></head><body><h2>Hello, this project was a simple project made for my friend Daniel years before, hopefully to update it sometime~ XDXD</h2></body><p></p><h2>This is a testing picture called...</h2><p></p><h1 style = "color : red">MILKY GUAVA!!</h1><img src="https://raw.githubusercontent.com/jackhsujungtse/MERN-HW/master/HW4/Work/milkyguava.JPG" width = 50% alt = "milky guava"/></html>');
});
app.get('/404', function(req, res) {
    res.writeHead(404);
    res.end('<html><head></head><body><h1>Sorry, page not found!!! XDXD</h1></body></html>');
});

app.listen(port);