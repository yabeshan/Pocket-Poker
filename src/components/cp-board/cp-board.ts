import {Component, Input} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    CpRoom,
} from '../../components';

import {
    PositionModel,
} from '../../models';

import {
    ResizeProvider,
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

    constructor (
        public platform: Platform, 
    ) {
        //
    }

    ngOnInit() {
        ResizeProvider.resizeAction.subscribe((isLandscape: boolean)=>{
            this.resizeActionHandler(isLandscape);
        });
        this.resizeActionHandler(null);

        setTimeout(()=>{
            this.resizeActionHandler(null);
        },3000);
    }

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
        if (dist > 100) {
            this.top = dist;
        } else {
            this.left = (w - 800 * this.zoom) * 0.5 / this.zoom;
        }

        /*
        let dist: number = (w - 800 * this.zoom);
        if (dist > 20) {
            this.left = dist * 0.5 / this.zoom;
        } else {
            this.top = (h - 600 * this.zoom) * 0.5 / this.zoom;
            if (this.top == 100) {
                this.left = dist * 0.5 / this.zoom;
            }
        }
        */
    }

}