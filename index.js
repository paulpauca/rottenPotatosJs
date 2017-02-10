var express = require('express');

var app = express();

var http = require('http').Server(app);

app.use(express.static('assets'));

// If the user targets '/' return the homepage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log('got request');
});

function callback() {
  console.log('Listening on localhost + 3000 ');
};

http.listen( 3000, callback );
