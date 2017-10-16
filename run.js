(function() {

	debug('wait a minute');

	window.console.log(checkCurrentTime());
	window.console.log(getTwoHoursFromNow());
	window.console.log(getThirtyMinutesFromNow());
	window.console.log(getTomorrow());

})();

function debug(everything) {
	console.log(everything);
}

function checkCurrentTime() {
	return moment().format();
}

function getTwoHoursFromNow() {
	var new_date = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(2, 'h');

	var hour = new_date.format('HH');
	var min = new_date.format('mm');
	var day = new_date.format('DD');
	var month = new_date.format('MM');
	var year = new_date.format('YYYY');

	return hour + ':' + min;
}

function getThirtyMinutesFromNow() {
	var new_date = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(30, 'm');

	var hour = new_date.format('HH');
	var min = new_date.format('mm');
	var day = new_date.format('DD');
	var month = new_date.format('MM');
	var year = new_date.format('YYYY');

	return hour + ':' + min;
}

function getTomorrow() {
	var new_date = moment(moment().format("DD-MM-YYYY"), "DD-MM-YYYY").add(1, 'days');

	var day = new_date.format('DD');
	var month = new_date.format('MM');
	var year = new_date.format('YYYY');

	return day + ':' + month + ':' + year;
}