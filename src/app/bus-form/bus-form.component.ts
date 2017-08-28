import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OneBusApiService } from "../one-bus-api.service";

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css'],
  providers: [OneBusApiService]
})
export class BusFormComponent implements OnInit {
  apiData: any;

  constructor(private oneBusApi: OneBusApiService) { }

  ngOnInit() {
  }

  getStopApi(stopId: string) {
    this.oneBusApi.apitest().subscribe(response => {
      this.apiData = response;
    });
    console.log(this.apiData);
  }

}
