(function() {

	debug('wait a minute');

	window.console.log(getCurrentTime());
	window.console.log(getTwoHoursFromNow());
	window.console.log(getThirtyMinutesFromNow());
	window.console.log(getTomorrow('DD-MM-YYYY'));
	window.console.log(returnTimeWithIntervals('09:30', 30));
	window.console.log(checkIsToday('18-10-2017', 'DD-MM-YYYY'));

})();

function debug(everything) {
	console.log(everything);
}

/*
returns current date
*/
function getCurrentTime() {
	return moment().format();
}

/*
returns current time, plus two hours
*/
function getTwoHoursFromNow() {
	var newDate = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(2, 'h');
	return newDate.format('HH') + ':' + newDate.format('mm');
}

/*
returns current time, plus thirty minutes
*/
function getThirtyMinutesFromNow() {
	var newDate = moment(moment().format("DD-MM-YYYY HH:mm:ss"), "DD-MM-YYYY HH:mm:ss").add(30, 'm');
	return newDate.format('HH') + ':' + newDate.format('mm');
}

/*
requires date format
returns tomorrow
*/
function getTomorrow($format) {
	var newDate = moment(moment().format($format), $format).add(1, 'days');
	return newDate.format('DD') + '-' + newDate.format('MM') + '-' + newDate.format('YYYY');
}

/*
requires a date,
checks if equal to todays date
returns boolean value
*/
function returnTimeWithIntervals($startTime, $interval) {
	var $returnTime = moment($startTime, 'HH:mm').add($interval, 'm');
	return $returnTime.format('HH') + ':' + $returnTime.format('mm');
}

/*
requires a date,
checks if equal to todays date
returns boolean value
*/
function checkIsToday($date, $format) {
	var today = moment().format($format);
	return today === $date;

}

/*
want to build recursive functino that will call returnTimeWithIntervals
until a conditional is met, returned time is === to close time
 */

// function recursiveTimeGetter($openTime, $closeTime, $interval) {
// 	while (returnTimeWithIntervals($openTime, $interval) < $closeTime ) {

// 	}
// }