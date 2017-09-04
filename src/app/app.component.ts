import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {
	HomePage,
} from '../pages';

import {
	ApiProvider,
	ResizeProvider,
} from '../providers';

@Component({
	template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {
	
	rootPage:any = HomePage;

	constructor(
		private platform: Platform, 
		private statusBar: StatusBar, 
		private splashScreen: SplashScreen,
		// ApiProvider = init connect to backend
		private api: ApiProvider, 
		// ResizeProvider = init resize and rotation
		private resizer: ResizeProvider,
	) {
		platform.ready().then(() => {
			statusBar.styleDefault();
			setTimeout(()=>{
				splashScreen.hide();
			},3000);
    	});
  	}
}

