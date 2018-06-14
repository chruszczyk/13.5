var os = require('os');

function getTime() {
	let uptime = Math.floor(os.uptime());
	let hours = Math.floor(uptime / 3600);
	let minutes = Math.floor((uptime - (hours * 3600)) / 60);
	let seconds = uptime % 60;
	if (hours == 0) {
		return minutes + ' minutes ' + seconds + ' seconds'
	} else {
		return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds'
	}
}

exports.time = getTime;