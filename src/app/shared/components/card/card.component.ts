import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponet {
    @Input() title: string = '';

}