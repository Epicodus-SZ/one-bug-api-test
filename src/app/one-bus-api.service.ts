import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  Jsonp,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/map';
// import {ReadyStates, RequestMethods, ResponseTypes} from '@angular/enums';

@Injectable()
export class OneBusApiService {

apiRoot: string = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_570.json';

  constructor(private jsonp: Jsonp)  {}

  apitest() {
    let apiURL =`${this.apiRoot}?callback=JSONP_CALLBACK&key=377e7bc6-e6c6-494d-b18f-f66b6dd49226`;
    return this.jsonp.request(apiURL)
    .map(res => {
      return res.json()
    });

  }
}
