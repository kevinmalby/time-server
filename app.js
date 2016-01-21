'use strict';

let express = require('express');

// Initialize the app
let app = express();

// Set the port for the application
app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Pass the express app to the routes file
require('./routes')(app);

// Start the server listening to the port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});