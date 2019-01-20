var express = require('express');
var router = express.Router();
var path = require("path");

// define the home page route
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html'))
})
// define the about route
router.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/survey.html'))
})

module.exports = router