import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComonent implements OnInit, OnDestroy {

    @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {

        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    }

    ngOnDestroy(): void {

        this.debounce.unsubscribe();
    }
}