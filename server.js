var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get('/01-boilerplate', function (req, res) {
  res.render('../01-boilerplate.html');
});

app.get('/02-tables', function (req, res) {
  res.render('../02-tables.html');
});

app.get('/03-cssintro', function (req, res) {
  res.render('../03-cssintro.html');
});

app.get('/04-cssbasics', function (req, res) {
  res.render('../04-cssbasics.html');
});

app.get('/05-gallery', function (req, res) {
  res.render('../05-gallery.html');
});

app.get('/06-minimalblog', function (req, res) {
  res.render('../06-minimalblog.html');
});

app.get('/06-minimalblog-alt', function (req, res) {
  res.render('../06-minimalblog-alt.html');
});

app.get('/07-bsgallery', function (req, res) {
  res.render('../07-bsgallery.html');
});

app.get('/08-landingpage', function (req, res) {
  res.render('../08-landingpage.html');
});

app.get('/09-jsstalker', function (req, res) {
  res.render('../09-jsstalker.html');
});

app.get('/10-agecalculator', function (req, res) {
  res.render('../10-agecalculator.html');
});

app.get('/11-bouncer', function (req, res) {
  res.render('../11-bouncer.html');
});

app.get('/12-loopexample', function (req, res) {
  res.render('../12-loopexample.html');
});

app.get('/13-whileloopproblemset', function (req, res) {
  res.render('../13-whileloopproblemset.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
