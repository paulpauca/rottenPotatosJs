var express = require('express');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
var path = require('path');

var app = express();

var http = require('http').Server(app);

app.use(express.static(path.join(__dirname,'assets')));

// urlencoded() extracts data from <form> and
// add this data to the body element in the request object
app.use(bodyParser.urlencoded({extended: true}));

// Set the view engine of the express app to ejs
app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/html/about.html');
});

// If the user targets '/' return the homepage
app.get('/', function(req, res){

  // obtain data from movies into cursor object
  var cursor = db.collection('movies').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    // Render index.ejs
    res.render('index.ejs', {movies: results});
  });

  // Render views instead of sending a static file
  //res.sendFile(__dirname + '/index.html');

  console.log('got GET / request');

});

app.post('/movies', (req, res) => {
  console.log('got Post request');
  console.log(req.body);
  db.collection('movies').save(req.body, (err, result) => {
    if (err)
      return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  })
} )

function callback() {
  console.log('Listening on localhost ' + port);
};
var port = process.env.PORT || 3000;

var db;

MongoClient.connect('mongodb://pauca:wfu1soccer@ds011912.mlab.com:11912/rottenpotatos',
(err, database) => {
  db = database;
  http.listen( port, callback );
})
