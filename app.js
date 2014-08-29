var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

var viewsFolder = __dirname + '/public/views'
app.set('views', viewsFolder);

app.engine('handlebars', exphbs({defaultLayout: viewsFolder + '/layouts/master'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  var mockObject = { firstName: 'Daniel', lastName: 'Williams' };
  res.render('home', mockObject);
});

app.listen(3000);