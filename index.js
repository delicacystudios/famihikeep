var express = require('express');
var path = require("path");
var app = express();

app.set('view engine', 'ejs');

app.use("/css", express.static(path.resolve(`${(path.resolve(`${process.cwd()}${path.sep}views`))}${path.sep}assets/css`)));
app.use("/js", express.static(path.resolve(`${(path.resolve(`${process.cwd()}${path.sep}views`))}${path.sep}assets/js`)));
app.use("/img", express.static(path.resolve(`${(path.resolve(`${process.cwd()}${path.sep}views`))}${path.sep}assets/img`)));

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/services', function(req, res) {
  res.render('pages/services');
});

app.get('/shop', function(req, res) {
  res.render('pages/shop');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.get('/noaccess', function(req, res) {
  res.render('pages/404');
});

app.listen(8080); 
console.log('Server is listening on port 8080');