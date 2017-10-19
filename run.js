(function() {

	debug('wait a minute');

	// window.console.log(getCurrentTime());
	// window.console.log(getTwoHoursFromNow());
	// window.console.log(getThirtyMinutesFromNow());
	// window.console.log(getTomorrow('DD-MM-YYYY'));
	// window.console.log(returnTimeWithIntervals('09:30', 30));
	// window.console.log(checkIsToday('18-10-2017', 'DD-MM-YYYY'));
	window.console.log(returnDateDifferenceAsDays('18-10-2017 10:45','20-10-2017 11:00'));
	// recursiveTimeGetter('13:00', '23:00', 15);

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
function getTomorrow(format) {
	var newDate = moment(moment().format(format), format).add(1, 'days');
	return newDate.format('DD') + '-' + newDate.format('MM') + '-' + newDate.format('YYYY');
}

/*
requires a date,
checks if equal to todays date
returns boolean value
*/
function returnTimeWithIntervals(startTime, interval) {
	var returnTime = moment(startTime, 'HH:mm').add(interval, 'm');
	return returnTime.format('HH') + ':' + returnTime.format('mm');
}

/*
requires a date,
checks if equal to todays date
returns boolean value
*/
function checkIsToday(date, format) {
	var today = moment().format(format);
	return today === date;

}

/*
recursive functino that returns time based on open and close
returns time with given interval.
until a conditional is met, returned time is === to close time
 */
function recursiveTimeGetter(openTime, closeTime, interval) {
	while (returnTimeWithIntervals(openTime, interval) <= closeTime ) {
		openTime = returnTimeWithIntervals(openTime, interval);
		window.console.log(openTime);
	}
}

/*
returns the duration in days,
any difference in time eg 5 
minutes will returns the next day
 */
function returnDateDifferenceAsDays(pickupDate, dropOffDate) {
	from = moment(pickupDate, 'DD-MM-YYYY HH:mm:ss');
	to = moment(dropOffDate, 'DD-MM-YYYY HH:mm:ss');
	days = to.diff(from);
	
	return Math.ceil( days / (24*60*60*1000) );
}


