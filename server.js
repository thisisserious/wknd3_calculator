var express = require('express'); // require the Express library
var bodyParser = require('body-parser'); // require body-parser module
var path = require('path');
var calcRouter = require('./routes/calculator');
var app = express(); // create a new app

app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculator', calcRouter);

app.get('/', function (req, res) {
  var date = new Date();
  var hour = date.getHours();
  var mins = date.getMinutes();
  console.log('Received request at:', hour + ':' + mins);
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

app.use(express.static('public')); // middleware

app.listen(3000);

console.log('Listening on port 3000');
console.log('Press ctrl + c to quit');
