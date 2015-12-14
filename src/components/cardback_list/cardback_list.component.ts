import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MashapeService} from '../../shared/service/mashapeService';

@Component({
    selector: 'cardback_list',
	providers: [MashapeService],
	directives: [CORE_DIRECTIVES],
    templateUrl: './components/cardback_list/cardback_list.component.html',
	styleUrls: ['./components/cardback_list/cardback_list.component.css']
})
export class CardBackListComponent {
	cardBacks: any;
    constructor(service: MashapeService){
        service.getCardBacks()
            .subscribe(res => this.cardBacks = res);
    }
}