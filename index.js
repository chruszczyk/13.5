var OSinfo = require('./modules/OSinfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {

			case '/lang':
				process.stdout.write(process.env.LANG + '\n');
				break;

			case '/node':
				process.stdout.write(process.versions.node + '\n');
				break;

			case '/hello':
				process.stdout.write('hello!\n');
				break;

			case '/getOSinfo':
				OSinfo.print();
				break;

			case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();

			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
})