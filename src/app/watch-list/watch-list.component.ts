import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { OneBusApiService } from '../one-bus-api.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
  providers: [OneBusApiService]
})
export class WatchListComponent implements OnInit {
  watches: FirebaseListObservable<any[]>;

  constructor(private oneBusApiService: OneBusApiService) { }

  ngOnInit() {
    this.watches = this.oneBusApiService.getWatches();
  }

}
