import { Injectable, Inject, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { AppService } from './app.service';

@Injectable()

export class MyInterceptor implements  HttpInterceptor {
  // private appService = AppService;
  auth;
  // constructor(private appService: AppService) {}
  // constructor(inj: Injector) {
  //    this.auth = inj.get(AppService);
  //   // setTimeout(() => this.appService = inj.get(AppService));
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(JSON.stringify(request));
    // console.log(this.auth);
    const token = '34535345rfrw';
    if (token) {
      request = request.clone({headers: request.headers.set('authToken', token)});
    }
    if (request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }
    return next.handle(request);
  }
}
