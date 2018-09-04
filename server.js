var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
// this parses the html body into a string
app.use(bodyParser.text({ type: 'text/html'}))

// require app and pass it into module.exports function
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});