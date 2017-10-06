import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()

export class HomeService {
  constructor(private http: HttpClient) {}
  getApi() {
    console.log('inside');
    return this.http
      .get('https://example.com/api/things')
      .toPromise()
      .then()
      .catch();
  }
}
