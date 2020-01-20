const { BaseController } = require('eop');

class IndexController extends BaseController {
	constructor(app) {
		super(app);
	}

	home(ctx) {
		let text = this.service.index.getHome();
		ctx.body = text;
	}


}
module.exports = IndexController;