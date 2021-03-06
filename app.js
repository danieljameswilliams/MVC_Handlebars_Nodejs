var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var viewsFolder = __dirname + '/public/views';

app.use(express.static(__dirname + '/public'));

app.engine( 'handlebars', exphbs(
{
  defaultLayout: viewsFolder + '/layouts/master',
  layoutsDir: viewsFolder + '/layouts',
  partialsDir: viewsFolder + '/partials'
}) );
app.set('view engine', 'handlebars');
app.set('views', viewsFolder);

app.get('/', function (req, res) {
  var mockObject = {
    id: 0,
    firstName: 'Daniel',
    lastName: 'Jensen',
    age: 22
  };
  res.render('home', mockObject);
});

app.listen(3000);