(function() {

	debug('wait a minute');

	window.console.log(checkCurrentTime());
	window.console.log(getTwoHoursFromNow());
	window.console.log(getThirtyMinutesFromNow());
	window.console.log(addThirtyMinutesToPresent());

})();

function debug(everything) {
	console.log(everything);
}

function checkCurrentTime() {
	return moment().format();
}

function getTwoHoursFromNow() {
	return moment().hour() + 2;
}

function getThirtyMinutesFromNow() {
	return moment().minute() + 30;
}

function addThirtyMinutesToPresent() {
	return moment().add(30, 'm');
}