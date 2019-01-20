var express = require("express");
var path = require("path");

var api = require('./app/routing/apiRoutes');
var router = require('./app/routing/htmlRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.use('/', api);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});








