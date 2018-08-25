import { NgModule } from "@angular/core";
import { CardComponet } from "./card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CardComponet
    ],

    exports: [
        CardComponet
    ],

    imports: [
        CommonModule
    ]
})
export class CardModule {}