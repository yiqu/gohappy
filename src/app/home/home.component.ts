import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Params } from "@angular/router";
import { DataService } from './../shared/service/data.service';
import { IResponse, IFeedItem, EventItem } from './../shared/models/IResponse.model';
import { Subject, Subscription } from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  feedData$: Subscription = new Subscription();
  feedData: EventItem[] = [];
  feedDataLoading: boolean = false;

  constructor(public ds: DataService) {
  }

  ngOnInit() {
    this.queryFeedData();
  }

  ngOnDestroy() {
    this.feedData$.unsubscribe();
  }

  queryFeedData(): void {
    this.feedDataLoading = true;
    this.feedData$.unsubscribe();
    this.feedData$ = this.ds.getFeedData().subscribe(
      (res: EventItem[]) => {
        this.feedData = res.slice();
      },
      (err) => {
        this.feedDataLoading = false;
      },
      () => {
        this.feedDataLoading = false;
      }
    );
  }

}