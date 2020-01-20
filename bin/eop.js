/**
 * 入口文件
 */
let _ = require('underscore');
let cmds = ['create'];
const runners = [];

_.each(cmds, function (cmd) {
	runners[cmd] = require('./' + cmd + '_runner');
});

const help = function () {
	console.log('Usage:');
	console.log('    eop -v or eop --version');
	console.log('    eop -h or --help');
	console.log('');
	console.log('Commands:');
	console.log('    create - Create a new eop project');
	console.log('');
}

const version = function () {
	const package = require('../package.json');
	console.log('Version: ', package.version);
}

const showHelp = function (cmd) {
	runners[cmd].help();
}

const checkArgs = function (args) {
	if (args.length >= 2) {
		if (args[1] === '-v' || args[1] === '--version') {
			version();
			process.exit(1);
		}
		if (args[1] === '-h' || args[1] === '--help') {
			help();
			process.exit(1);
		}
		if (args.length >= 3 && args[1] === 'help' && _.contains(cmds, args[2])) {
			showHelp(args[2]);
			process.exit(1);
		}
		if (!_.contains(cmds, args[1])) {
			help();
			process.exit(1);
		}
		return 0;
	} else {
		help();
		process.exit(1);
	}
}

var args = !(process.argv[0] === 'node' ||
	process.argv[0] === 'nodejs' ||
	process.argv[0].match(/node.exe$/) ||
	process.argv[0].match(/node$/)) ? process.argv : _.last(process.argv, process.argv.length - 1);

checkArgs(args);
var cmd = args[1];
var options = _.last(args, args.length - 2);

runners[cmd].run(options);