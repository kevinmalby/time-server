'use strict';

let express = require('express'),
	bodyParser = require('body-parser');

let app = express();

require('./routes')(app);
app.use(bodyParser.urlencoded({
	extended: false
}));

app.listen(3000);