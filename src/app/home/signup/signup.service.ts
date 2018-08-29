import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = 'http://locahost:3000';

@Injectable ({ providedIn: 'root' })
export class SignUpservice {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {

        return this.http.get(API_URL + '/user/exists/' + userName);
    }
}