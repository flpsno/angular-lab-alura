import { HttpInterceptor, HttpRequest, HttpHandler,
        HttpSentEvent, HttpHeaderResponse, HttpResponse, HttpUserEvent, HttpProgressEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenSerice: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse
        | HttpProgressEvent | HttpResponse<any>
        | HttpUserEvent<any>> {

            if (this.tokenSerice.hasToken()) {
                const token = this.tokenSerice.getToken();
                req = req.clone(
                    {
                        setHeaders: {
                            'x-access-token': token
                        }
                    });
            }
            return next.handle(req);
    }
}
