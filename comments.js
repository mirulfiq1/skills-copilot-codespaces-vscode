// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up server
var server = app.listen(8080, function() {
    console.log('Server is running...');
});

// Set up comments data
var comments = [];
fs.readFile('comments.json', function(err, data) {
    if (err) {
        console.log('Error reading comments.json file');
    } else {
        comments = JSON.parse(data);
    }
});

// GET route
app.get('/comments', function(req, res) {
    res.send(comments);
});