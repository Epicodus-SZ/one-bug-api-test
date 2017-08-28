import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  RequestMethod
} from '@angular/http';
// import {ReadyStates, RequestMethods, ResponseTypes} from '@angular/enums';
import { Observable } from 'rxjs/Observable';
import { obaKey } from './api-key';

@Injectable()
export class OneBusApiService {
  // createHeader(headers: Headers) {
  //   headers.append('Access-Control-Allow-Credentials', 'true');
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  //  }

  // url: string;



  constructor(private http: Http)  {}

  apitest() {
    let tempHead = new Headers();
    tempHead.append('Access-Control-Allow-Credentials', 'true');
    tempHead.append('Access-Control-Allow-Origin', '*');
    tempHead.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    tempHead.append('Access-Control-Allow-Headers', 'Content-Type');

    let basicOptions : RequestOptionsArgs = {
      url: 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/',
      headers: tempHead
    };

    // let basicOptions : RequestOptionsArgs = {
    //   headers: new Headers({'Access-Control-Allow-Origin':'*/*', 'Access-Control-Allow-Credentials': true,'Access-Control-Allow-Headers': 'Content-Type'})
    // };

    return this.http.get("http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_570.json?callback=steve&key=377e7bc6-e6c6-494d-b18f-f66b6dd49226", basicOptions);

    // return this.http.get("http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_570.xml?key=377e7bc6-e6c6-494d-b18f-f66b6dd49226",basicOptions);
  }
}
