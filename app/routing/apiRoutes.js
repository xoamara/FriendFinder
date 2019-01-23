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
  let diff = [];

  for (var i = 0; i < friends.length; i++) {
    total = Math.abs(parseInt(friends[i].ratings) - parseInt(newUserRatings[i]));
    diff.push(total);
  }

  // Returns the lowest value from the diff array
  let bestMatch = Math.min.apply(Math, diff);

  // Provides the index position of the best match
  let bestMatchIndexPosition = diff.indexOf(bestMatch);

  // Returns the best match from user array - will use variable value to return the match to the client side
  console.log(friends[bestMatchIndexPosition]);

  friends.push(newUser);
  // console.log(friends);

});

module.exports = api
