import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    BoardModel,
    PositionModel,
    PlayerModel,
} from '../../models';

import {
    ResizeProvider,
} from '../../providers';

@Component({
    selector: 'cp-player',
    templateUrl: 'cp-player.html'
})

export class CpPlayer {

    @Input() playerAction: BehaviorSubject<BoardModel>;

    position: PositionModel = new PositionModel(100);
    model: PlayerModel = null;
    visible: boolean = false;
    name: string = "";
    balance: string = "";
    image: string = "";

    styles: string = "player-container";
    top: number = 0;
    left: number = 0;

    constructor () {
        //
    }

    ngOnInit() {
        this.playerAction.subscribe(data=> this.initPlayer(data));
        ResizeProvider.rotationAction.subscribe((angle: string)=>{
            this.rotationActionHandler(angle);
        });
    }

    initPlayer(model: BoardModel) {
        if (model == null || model.player == null) {
            this.model = null;
            this.visible = false;
            this.name = "";
            this.balance = "";
            this.image = "";
        } else {
            this.model = model.player;
            this.visible = true;
            this.name = this.model.name;
            this.balance = this.model.balance;
            this.image = this.model.image;
            this.position = model.position;
            if (this.position != null) {
                this.top = this.position.y;
                this.left = this.position.x;
            }
        }
    }

    rotationActionHandler(angle: string) {
        this.styles = "player-container " + angle;
    }

}