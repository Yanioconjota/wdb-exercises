var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public/fonts", express.static(__dirname + "/public/fonts"));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
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

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
