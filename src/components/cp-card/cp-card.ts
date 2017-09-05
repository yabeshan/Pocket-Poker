import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    BoardModel,
} from '../../models';

@Component({
    selector: 'cp-card',
    templateUrl: 'cp-card.html'
})

export class CpCard {

    @Input() cardAction: BehaviorSubject<BoardModel>;

    styles: string = "card pos0";
    imgSrc: string = "http://yabeshan.github.io/Pocket-Poker/assets/cards/Red_Back.svg";
    
    constructor () {
        //
    }

    ngOnInit() {
        this.cardAction.subscribe(
            (data: BoardModel)=> this.initCard(data)
        );
    }

    initCard(data: BoardModel) {
        if (data == null) {
            return;
        }
        
        let imgFlag: number = data.type.indexOf(".svg");
        if (imgFlag < 0) {
            this.styles = "card " + data.type;
        } else {
            this.imgSrc = data.type;
        }
        
    }

}