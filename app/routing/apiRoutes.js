var express = require("express");
var path = require("path");
var api = express.Router()

// Import the list of friend entries
var friends = require('../data/friends');

api.get('/api/friends', function (req, res) {
  res.json('friend');
});

// define the about route
api.post('/api/friends', function (req, res) {
  res.send('survey.html')
  console.log(req.body);

  let newUser = req.body;
  console.log("New User Input " + JSON.stringify(newUser));

  let newUserRatings = req.body.ratings;

  console.log("New User Array STRING: " + newUserRatings);
  let newUserConversion = 

  console.log("New User Array: " + parseInt(newUserRatings));
  console.log("Friend array at index 0: " + friends[0].ratings);

  let diff = [];

  for (var i = 0; i < friends.length; i++) {

    total = Math.abs(parseInt(friends[i].ratings) - parseInt(newUserRatings[i]));

    diff.push(total);
    console.log(total);
    console.log(" Total Difference " + diff);
  }

  friends.push(newUser);
  // console.log(friends);

});

module.exports = api
