var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/function/:id1/:id2', function(req, res) {
	res.send('<html><head></head><body><h1>Function: ' + req.params.id1 +' '+ req.params.id2 +'</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'Jack', lastname: 'Hsu' });
});

app.listen(port);