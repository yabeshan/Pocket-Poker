import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import {MyApp} from './app.component';

import {
	HomePage,
} from '../pages';

import {
	CpBoard,
	CpRoom,
	CpPlayer,
	CpDealer,
	CpCard,
	CpBottomMenu,
	CpTopMenu,
} from '../components';

import {
	ApiProvider,
	ResizeProvider,
} from '../providers';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		
		CpBoard,
		CpRoom,
		CpPlayer,
		CpDealer,
		CpCard,
		CpBottomMenu,
		CpTopMenu,
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,

		CpBoard,
		CpRoom,
		CpPlayer,
		CpDealer,
		CpCard,
		CpBottomMenu,
		CpTopMenu,
	],
	providers: [
		StatusBar,
		SplashScreen,
		ApiProvider,
		ResizeProvider,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
