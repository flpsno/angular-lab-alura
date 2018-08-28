import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {

    constructor(private userService: UserService) {}
}