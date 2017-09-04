import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    ApiProvider,

    REQUEST_COMPLETE,
    REQUEST_ERROR,
    REQUEST_UPDATE,
} from '../../providers';

import {
    CpPlayer,
} from '../../components'

import {
    BoardModel,
    PositionModel,
    RequestModel,
    PlayerModel,
} from '../../models';

@Component({
    selector: 'cp-room',
    templateUrl: 'cp-room.html'
})

export class CpRoom {

    allPlayers: PlayerModel[] = [];
    positionPlayers: object[] = [
        {x:0,y:0},{x:0,y:0},{x:650,y:320},{x:0,y:0},
        {x:350,y:430},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:180,y:50}
    ];

    player0: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player1: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player2: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player3: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player4: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player5: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player6: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player7: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    player8: BehaviorSubject<BoardModel> = new BehaviorSubject(null);

    constructor () {
        //
    }

    ngOnInit() {
        ApiProvider.boardAction.subscribe(data=>this.boardActionHandler(data));
    }

	boardActionHandler(data: RequestModel) {
		if (data && data.type == REQUEST_UPDATE && data.data["players"]) {
            // console.log ("Room boardActionHandler", data.data["players"]);
            this.parseAllPlayers(data.data["players"]);
		}
    }

    parseAllPlayers(data: PlayerModel[]) {
        this.allPlayers = [];
        data.map(item => {
            let player: PlayerModel = null;
            if (item.id) {
                player = new PlayerModel(item.id, item.name, item.balance, item.image);
            }
            this.initPlayer(this.allPlayers.length, player);
            this.allPlayers.push(player);
        });
        
    } 
     
    initPlayer(id: number, model: PlayerModel) {
        let bm: BoardModel = new BoardModel();
        bm.player = model;
        bm.position = new PositionModel(this.positionPlayers[id]["x"],this.positionPlayers[id]["y"],1);
        this["player"+id].next(bm);
    }

}
