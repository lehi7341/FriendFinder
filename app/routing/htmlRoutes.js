var path = require("path");

module.exports = function(app) {
    // route for the survey.html page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // route for the home.html page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}