var express = require('express');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
var path = require('path');
var modelTools = require('./models/dataTools.js');

// Create the express object and pass it to the http server
var app = express();
var http = require('http').Server(app);

// Set assets as a directory where pictures and such will be available
app.use(express.static(path.join(__dirname,'assets')));

// urlencoded() extracs data from POST requests and
// add this data as a body element in the request object
app.use(bodyParser.urlencoded({extended: true}));

// Set the view engine of the express app to ejs
app.set('view engine', 'ejs');

// Respond to GET request for target '/about'
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/html/about.html');
});

// Respond to GET request for target '/team'
var members;
app.get('/team', (req, res) => {
  modelTools.readJsonFile('./models/data.json', (text) => {
    members = text;
    res.render('team.ejs', {data: members.participants});
  });

});


// Respond to GET request for target '/'
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

  console.log('got GET / request');

});

// Respond to POST request for target '/movies'
app.post('/movies', (req, res) => {
  console.log('got Post /movies request');
  console.log(req.body);
  db.collection('movies').save(req.body, (err, result) => {
    if (err)
      return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  })
} )

app.post('/update', (req, res) => {
  console.log('got Post /update request');
  console.log(req.body);
  res.redirect('/');
});

// callback function for http.listen()
function callback() {
  console.log('Listening on localhost ' + port);
};
var port = process.env.PORT || 3000;
// db will be associated with the database when the connection to
// to MongoLab is established.
var db;

// Connect to MongoLab, when the connection is established then
// associate the MongoLab database with variable db and start listening
// to HTML requests.
MongoClient.connect('mongodb://pauca:wfu1soccer@ds011912.mlab.com:11912/rottenpotatos',
(err, database) => {
  db = database;
  http.listen( port, callback );
})
