var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get('/01', function (req, res) {
  res.render('../01-boilerplate.html');
});

app.get('/02', function (req, res) {
  res.render('../02-tables.html');
});

app.get('/03', function (req, res) {
  res.render('../03-cssintro.html');
});

app.get('/04', function (req, res) {
  res.render('../04-cssbasics.html');
});

app.get('/05', function (req, res) {
  res.render('../05-gallery.html');
});

app.get('/06', function (req, res) {
  res.render('../06-minimalblog.html');
});

app.get('/06-alt', function (req, res) {
  res.render('../06-minimalblog-alt.html');
});

app.get('/07', function (req, res) {
  res.render('../07-bsgallery.html');
});

app.get('/08', function (req, res) {
  res.render('../08-landingpage.html');
});

app.get('/09', function (req, res) {
  res.render('../09-jsstalker.html');
});

app.get('/10', function (req, res) {
  res.render('../10-agecalculator.html');
});

app.get('/11', function (req, res) {
  res.render('../11-bouncer.html');
});

app.get('/12', function (req, res) {
  res.render('../12-loopexample.html');
});

app.get('/13', function (req, res) {
  res.render('../13-whileloopproblemset.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
