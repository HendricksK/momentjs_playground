(function() {

	debug('wait a minute');

	window.console.log(checkCurrentTime());
	window.console.log(getTwoHoursFromNow());
	window.console.log(getThirtyMinutesFromNow());
	window.console.log(getTomorrow());
	window.console.log(returnTimeWithIntervals('09:30', 30));

})();

function debug(everything) {
	console.log(everything);
}

function checkCurrentTime() {
	return moment().format();
}

function getTwoHoursFromNow() {
	var newDate = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(2, 'h');

	return newDate.format('HH') + ':' + newDate.format('mm');
}

function getThirtyMinutesFromNow() {
	var newDate = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(30, 'm');

	return newDate.format('HH') + ':' + newDate.format('mm');
}

function getTomorrow() {
	var newDate = moment(moment().format("DD-MM-YYYY"), "DD-MM-YYYY").add(1, 'days');

	return newDate.format('DD') + ':' + newDate.format('MM') + ':' + newDate.format('YYYY');
}

function returnTimeWithIntervals($startTime, $interval) {
	var $returnTime = moment($startTime, 'HH:mm').add($interval, 'm');

	return $returnTime.format('HH') + ':' + $returnTime.format('mm');
}

/*
want to build recursive functino that will call returnTimeWithIntervals
until a conditional is met, returned time is === to close time
 */

// function recursiveTimeGetter($openTime, $closeTime, $interval) {
// 	while (returnTimeWithIntervals($openTime, $interval) < $closeTime ) {

// 	}
// }