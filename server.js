var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methosOverride = require('method-override');
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url);

var api = express.Router();
require('./server/routes/api')(api);

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methosOverride());

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.get('/', function (req, res) {
	res.render('index');
});

app.listen(port, function() {
	console.log('server is running on port ' + port);
});