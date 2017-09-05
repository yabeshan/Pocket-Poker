import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    RequestModel,
} from '../models';

export const REQUEST_UPDATE : string = "REQUEST_UPDATE";
export const REQUEST_ERROR : string = "REQUEST_ERROR";
export const REQUEST_COMPLETE : string = "REQUEST_COMPLETE";

@Injectable()
export class ApiProvider {

    // userAction = login logout getUser setBet getCard getBalance
    public static userAction: BehaviorSubject<RequestModel> = new BehaviorSubject(null);  

    // boardAction = getPlayers getStatus
    public static boardAction: BehaviorSubject<RequestModel> = new BehaviorSubject(new RequestModel('loading')); 

    // animAction = cards players
    public static animAction: BehaviorSubject<RequestModel> = new BehaviorSubject(null); 

    constructor (
        private http: Http,
    ) {
        this.init();
    }

    init() {
        this.boardRequest('http://yabeshan.github.io/Pocket-Poker/assets/mock-data/board.json', {});
        this.userRequest('http://yabeshan.github.io/Pocket-Poker/assets/mock-data/user.json', {});
    }

    boardRequest(url: string, data: object) {
        this.http.get(url)
	        .subscribe(
                data => ApiProvider.boardAction.next(new RequestModel(REQUEST_UPDATE, true, data.json())),
                err => this.boardErrorHandler(err),
                () => ApiProvider.boardAction.next(new RequestModel(REQUEST_COMPLETE, false))
            );
    }

    boardErrorHandler(err) {
        console.log ('boardErrorHandler :: ', err);
        ApiProvider.boardAction.next(new RequestModel(REQUEST_ERROR, false, err));
    }
    
    userRequest(url: string, data: object) {
        this.http.get(url)
	        .subscribe(
                data => ApiProvider.userAction.next(new RequestModel(REQUEST_UPDATE, true, data.json())),
                err => this.userErrorHandler(err),
                () => ApiProvider.userAction.next(new RequestModel(REQUEST_COMPLETE, false))
            );
    }

    userErrorHandler(err) {
        console.log ('userErrorHandler :: ', err);
        ApiProvider.userAction.next(new RequestModel(REQUEST_ERROR, false, err));
    }

}