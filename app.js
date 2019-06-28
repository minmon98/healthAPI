var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");

var app = express();

//use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use controllers
var controllers = require(__dirname + "/apps/controllers");
app.use(controllers);

//config server
var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port, host, function () {
	console.log("server is running on ", port);
})