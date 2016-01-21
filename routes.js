'use strict';

module.exports = function(app) {
	let indexCtrl = require('./index.controller');
	app.get('/:date', indexCtrl.respond);
};