import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const baseURL = environment.baseURL;
        const httpRequest = new HttpRequest(<any>request.method, baseURL + request.url);
        request = Object.assign(request, httpRequest);

        return next.handle(request);
    }
}
