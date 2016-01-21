'use strict';

let express = require('express'),
	bodyParser = require('body-parser');

let app = express();

app.set('port', (process.env.PORT || 5000));

require('./routes')(app);
app.use(bodyParser.urlencoded({
	extended: false
}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});