'use strict';

exports.convertDate = function(req, res) {
	let strftime = require('strftime');
	let date = req.params.date;
	let dateAsNumber = Number(date + '000');
	let constructedDate;

	if (dateAsNumber) {
		constructedDate = new Date(dateAsNumber);
	} else {
		constructedDate = new Date(date);
	}

	if (constructedDate.toString() !== 'Invalid Date') {
		res.send({'unix': constructedDate.getTime() / 1000, 'natural': strftime('%B %d, %Y', constructedDate)});
	} else {
		res.send({'unix': null, 'natural': null});
	}
};

exports.index = function(req, res) {
	res.render('index');
};