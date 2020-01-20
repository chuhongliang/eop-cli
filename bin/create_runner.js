/**
 * 生成一个新的eop project
 */
const _ = require('underscore');
const fs = require('fs');
const fse = require('fs-extra');
const log4js = require('log4js');
const logger = log4js.getLogger();

function _help() {
	console.log('Usage: eop create <root>');
	console.log('    root - Root directory of project');
}

exports.help = function () {
	_help();
}

exports.run = function (options) {
	let root;
	if (_.size(options) >= 1) {
		root = options[0];
	} else {
		_help();
		return;
	}

	let starter = __dirname + '/../starter';
	if (!fs.existsSync(starter)) {
		logger.error('Starter templates can not be found! Please reinstall your eop');
		process.exit(1);
	}

	let src = starter;
	var dest = root;
	fse.copySync(src, dest);

	logger.info('Woo! A new eop project was born in ' + dest);
}