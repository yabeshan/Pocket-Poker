import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    BoardModel,
    PositionModel,
    PlayerModel,
    RequestModel,
} from '../../models';

import {
    ApiProvider,
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
    animStyles: string = "circle-anim-container";
    top: number = 0;
    left: number = 0;

    constructor () {
        //
    }

    ngOnInit() {
        this.playerAction.subscribe(
            (data: BoardModel)=> this.initPlayer(data)
        );
        ResizeProvider.rotationAction.subscribe(
            (angle: string)=>this.rotationActionHandler(angle)
        );
    }

    initPlayer(model: BoardModel) {
        if (model == null) {
            this.model = null;
            this.visible = false;
            this.name = "";
            this.balance = "";
            this.image = "";
            return;
        } 
        
        if (model.type=="position" && model.player != null) {
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

        if (model.type=="anim") {
            this.animStyles = "circle-anim-container";
            setTimeout(()=>{
                this.animStyles = "circle-anim-container circle-anim-start";
            },50);
        }
    }

    rotationActionHandler(angle: string) {
        this.styles = "player-container " + angle;
    }
}