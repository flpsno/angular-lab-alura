import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";
import { Photo } from "../../photo/photo";
import { UserService } from "../../../core/user/user.service";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {

        this.userService
            .getUser()
            .subscribe(user => {
                if (user.id != this.ownedPhoto.userId) {
                    this.renderer.setElementStyle(
                        this.element.nativeElement, 'display', 'none'
                    );
                }
            });
    }
}