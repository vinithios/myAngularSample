import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  data = ['vinith', 'kumar'];
  constructor(private http: HttpClient) {}
  token = 'asdsdsad23112sfsdfdsfeedbbnruwlsmdzvmgwje';
  // get<T>(url: string): Observable<T> {
  //   return this.http.get<T>(url);
  // }


}
