import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OneBusApiService } from "../one-bus-api.service";
import { Watch } from '../watch.model';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css'],
  providers: [OneBusApiService]
})
export class BusFormComponent implements OnInit {
  apiData: any;
  userId: string = "XXXXXXX";
  currentTime: number;

  constructor(private oneBusService: OneBusApiService) { }

  ngOnInit() {
  }

  // getStopApi(stopId: string, routeId: string) {
  //   this.oneBusApi.apitest(stopId).subscribe(response => {
  //     this.apiData = response;
  //   });
  //   this.addWatch(stopId, routeId, this.userId);
  //   this.currentTime = this.apiData.currentTime;
  // }

  addWatch(stopId: string, routeId: string) {
    let newWatch: Watch = new Watch(stopId, routeId, this.userId, 0);
    this.oneBusService.addWatch(newWatch);
  }

}
