
const common = module.exports;

common.random = function (min, max) {
	let temp = max - min;
	return Math.round(Math.random() * temp) + min;
}