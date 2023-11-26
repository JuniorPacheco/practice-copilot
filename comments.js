// Create web server
// 1. Load modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// 2. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mean-demo');

// 3. Create web server
var app = express();

// 4. Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 5. Define model
var Comment = mongoose.model('Comment', {