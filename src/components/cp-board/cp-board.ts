import {Component, Input} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    CpRoom,
    CpDealer,
} from '../../components';

import {
    PositionModel,
    RequestModel,
} from '../../models';

import {
    ApiProvider,
    ResizeProvider,
    REQUEST_UPDATE,
} from '../../providers';

@Component({
    selector: 'cp-board',
    templateUrl: 'cp-board.html'
})

export class CpBoard {
    
    styles: string = "board-container";
    rotatePlayer: string = "";

    top: number = 0;
    left: number = 0;
    zoom: number = 1;
    zoomX: number = 1;
    zoomY: number = 1;

    animStackIndex: number = -1;
    animStack: object[] = [{
        duration: 1000,
        model: new RequestModel("card",true,{card:1,action:'pos21'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:2,action:'pos41'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:3,action:'pos81'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:4,action:'pos22'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:5,action:'pos42'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:6,action:'pos82'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:7,action:'board1'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:8,action:'board2'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:9,action:'board3'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:10,action:'board4'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:11,action:'board5'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:5,action:'pos41open'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:2,action:'pos42open'})
    },{
        duration: 500,
        model: new RequestModel("card",true,{card:5,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/QS.svg'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:2,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/9H.svg'})
    },{
        duration: 500,
        model: new RequestModel("card",true,{card:7,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/6C.svg'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:8,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/JD.svg'})
    },{ 
        duration: 10000,
        model: new RequestModel("player",true,{player:2,action:'anim'})
    },{
        duration: 500,
        model: new RequestModel("card",true,{card:9,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/TH.svg'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:10,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/KS.svg'})
    },{ 
    //     duration: 10000,
    //     model: new RequestModel("player",true,{player:4,action:'anim'})
    // },{
        duration: 10000,
        model: new RequestModel("player",true,{player:8,action:'anim'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:11,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/QH.svg'})
    },{
        duration: 3000,
        model: new RequestModel("card",true,{card:11,action:'posMaxi'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:11,action:'board5'})
    },{
        duration: 1000,
        model: new RequestModel("card",true,{card:0,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/Red_Back.svg'})
    },{
        duration: 2000,
        model: new RequestModel("card",true,{card:0,action:'pos0'})
    }];

    constructor (
        public platform: Platform, 
    ) {
        //
    }

    ngOnInit() {
        ApiProvider.boardAction.subscribe(data=>this.boardActionHandler(data));

        ResizeProvider.resizeAction.subscribe((isLandscape: boolean)=>{
            this.resizeActionHandler(isLandscape);
        });
        this.resizeActionHandler(null);

        setTimeout(()=>{
            this.resizeActionHandler(null);
        },3000);
    }

    /******************* BOARD UTILS **********************/
    boardActionHandler(data: RequestModel) {
		if (data && data.type == REQUEST_UPDATE && data.data["action"] && data.data["action"] == "start-game") {
            this.updateGameController();
		}
    }

    updateGameController() {
        if (++this.animStackIndex >= this.animStack.length) {
            this.animStackIndex = 0;
        }

        let action = this.animStack[this.animStackIndex];
        ApiProvider.animAction.next(action["model"]);
        setTimeout(()=>{
            this.updateGameController();
        }, action["duration"]);
    }

    /******************** RESIZE UTILS **********************/
    resizeActionHandler(isLandscape: boolean) {
        let w: number = window.innerWidth;
        let h: number = window.innerHeight;

        if (window.orientation == undefined) {
            // desktop detect
            isLandscape = (h/w < 1.3);
        } else {
            // mobile tablet
            let o: string = window.orientation + ""; 
            isLandscape = (o.indexOf("90")>=0);
        }
        this.boardPosition(w, h, isLandscape);
    }

    boardPosition(w: number, h: number, isLandscape: boolean) {
        if (isLandscape) {
            this.styles = "board-container";
            this.rotatePlayer = "";
            this.top = 0;
            this.left = 0;    
            this.zoomX = w / 800;
            this.zoomY = h / ( (h < 500) ? 640 : 600);
        } else {
            this.styles = "board-container rotate";
            this.rotatePlayer = "rotate";
            this.top = 0;
            this.left = -100;   
            this.zoomX = h / 800;
            this.zoomY = w / 600;     
        }
        
        ResizeProvider.rotationAction.next(this.rotatePlayer);
        this.zoom = (this.zoomX < this.zoomY) ? this.zoomX : this.zoomY;

        let dist: number = (h - 600 * this.zoom) * 0.5 / this.zoom;
        if (dist >= 100) {
            this.top = dist;
        } else {
            this.left = (w - 800 * this.zoom) * 0.5 / this.zoom;
        }
    }

}