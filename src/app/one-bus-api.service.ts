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
//database
import { Watch } from './watch.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// import {ReadyStates, RequestMethods, ResponseTypes} from '@angular/enums';

@Injectable()
export class OneBusApiService {
  watches: FirebaseListObservable<any[]>;

  apiRoot: string = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_570.json';

  constructor(private jsonp: Jsonp, private database: AngularFireDatabase)  {
    this.watches = database.list('watches');
  }

  apitest(stopId: string) {
    let apiURL =`${this.apiRoot}?callback=JSONP_CALLBACK&key=377e7bc6-e6c6-494d-b18f-f66b6dd49226`;
    return this.jsonp.request(apiURL)
    .map(res => {
      return res.json()
  });


    getWatches() {
      return this.watches;
    }

    addWatch(newWatch : Watch) {
      this.watches.push(newWatch);
    }

  }
}
