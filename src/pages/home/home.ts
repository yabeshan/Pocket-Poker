import {Component} from '@angular/core';

import {
	ApiProvider,

	REQUEST_UPDATE,
	REQUEST_ERROR,
	REQUEST_COMPLETE,
} from '../../providers';

import {
	RequestModel,
} from '../../models';

import {
	CpBoard,
	CpTopMenu,
	CpBottomMenu,
} from '../../components';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	

	constructor() {
		this.init();
	}

	init() {
		ApiProvider.userAction.subscribe(this.userActionHandler);
	}

	userActionHandler(data: RequestModel) {
		if (data && data.type == REQUEST_UPDATE) {
			console.log ("userActionHandler", data.data["user"]);
		}
	}

}
