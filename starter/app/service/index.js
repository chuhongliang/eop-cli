const { BaseService } = require('eop');

class IndexService extends BaseService {
	getHome() {
		let randNum = this.util.common.random(1, 100);
		return `'this is home randomNum=${randNum}`;
	}

}
module.exports = IndexService;