var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var timeInfo = require('../modules/time.js');
	var userInfo = os.userInfo();

	console.log('System:'.green, type);
	console.log('Release:'.rainbow, release);
	console.log('CPU model:'.red, cpu);
	console.log('Uptime: ~ '.yellow, timeInfo.time());
	console.log('User name:'.blue, userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;