var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');

var app = express();
var router = express.Router();

var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlbd = "mongodb://localhost/pluginstore";

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded



app.post('/api/createUser', function (req, res) {    
});

app.post('/api/createPlugin', function (req, res) {
});

app.get('/api/get')





var server = http.createServer(function(req, res) {
    res.end("Hello World");
});

server.listen(1337);
console.log("");