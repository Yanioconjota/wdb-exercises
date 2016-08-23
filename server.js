var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));


app.get('/index.html', function (req, res) {
  res.render('../index.html');
});

app.get('/01-boilerplate.html', function (req, res) {
  res.render('../01-boilerplate.html');
});

app.get('/02-tables.html', function (req, res) {
  res.render('../02-tables.html');
});

app.get('/03-cssintro.html', function (req, res) {
  res.render('../03-cssintro.html');
});

app.get('/04-cssbasics.html', function (req, res) {
  res.render('../04-cssbasics.html');
});

app.get('/05-gallery.html', function (req, res) {
  res.render('../05-gallery.html');
});

app.get('/06-minimalblog.html', function (req, res) {
  res.render('../06-minimalblog.html');
});

app.get('/06-minimalblog-alt.html', function (req, res) {
  res.render('../06-minimalblog-alt.html');
});

app.get('/07-bsgallery.html', function (req, res) {
  res.render('../07-bsgallery.html');
});

app.get('/08-landingpage.html', function (req, res) {
  res.render('../08-landingpage.html');
});

app.get('/09-jsstalker.html', function (req, res) {
  res.render('../09-jsstalker.html');
});

app.get('/10-agecalculator.html', function (req, res) {
  res.render('../10-agecalculator.html');
});

app.get('/11-bouncer.html', function (req, res) {
  res.render('../11-bouncer.html');
});

app.get('/12-loopexample.html', function (req, res) {
  res.render('../12-loopexample.html');
});

app.get('/13-whileloopproblemset.html', function (req, res) {
  res.render('../13-whileloopproblemset.html');
});

app.get('/14-annoyomatic.html', function (req, res) {
  res.render('../14-annoyomatic.html');
});

app.get('/15-forloopproblemset.html', function (req, res) {
  res.render('../15-forloopproblemset.html');
});

app.get('/16-functionsproblemset.html', function (req, res) {
  res.render('../16-functionsproblemset.html');
});

app.get('/17-setintervalexample.html', function (req, res) {
  res.render('../17-setintervalexample.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
