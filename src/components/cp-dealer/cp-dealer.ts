import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {
    BoardModel,
    RequestModel,
} from '../../models';

import {
    CpCard,
} from '../../components';

import {
    ApiProvider,
} from '../../providers';

@Component({
    selector: 'cp-dealer',
    templateUrl: 'cp-dealer.html'
})

export class CpDealer {
    
    card1: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card2: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card3: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card4: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card5: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card6: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card7: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card8: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card9: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card10: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card11: BehaviorSubject<BoardModel> = new BehaviorSubject(null);
    card12: BehaviorSubject<BoardModel> = new BehaviorSubject(null);

    constructor () {
        //
    }

    ngOnInit() {
        ApiProvider.animAction.subscribe(
            (data: RequestModel) => this.parseAction(data)
        );
    }

    parseAction(data: RequestModel) {
        if (data == null || !data.type || data.type != "card") {
            return;
        }

        let id: number = data.data["card"];
        let bm: BoardModel = new BoardModel();
        bm.type = data.data["action"];

        if (id == 0) {
            let k:number=1;
            let total: number = 12;
            for (k; k<total; k++) {
                this["card"+ k ].next(bm);
            }
        } else {
            this["card"+ id ].next(bm);
        }
        
    }
}