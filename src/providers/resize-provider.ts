import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    PositionModel,
} from '../models';

@Injectable()
export class ResizeProvider {

    // resizeAction = detect to resize, orientation, fullscreen // boolean = isLandscape 
    public static resizeAction: BehaviorSubject<boolean> = new BehaviorSubject(null); 
    
    // rotationAction = fire from board after rotation // string = angle
    public static rotationAction: BehaviorSubject<string> = new BehaviorSubject(null); 

    constructor(
        private platform: Platform,
    ) {
        this.init();
    }

    init() {
        ResizeProvider.resizeAction.next(null);

        let that = this;
        window.addEventListener("resize", function() {
            // let isLandscape1: boolean = (that.platform && that.platform.isLandscape() == true);
            // let orient1 = window.orientation;
            setTimeout(()=>{
                // let isLandscape2: boolean = (that.platform && that.platform.isLandscape() == true);
                // let orient2 = window.orientation;
                // alert( isLandscape1 + " = "+orient1 + "_____________" + isLandscape2 + " = "+orient2 );

                ResizeProvider.resizeAction.next(null);
            },100);
        }, false);
    }
}