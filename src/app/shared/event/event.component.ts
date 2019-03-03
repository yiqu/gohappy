import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { IFeedItem } from '../models/IResponse.model'

@Component({
  selector: 'app-feed-event',
  templateUrl: 'event.component.html',
  styleUrls: ['./event.component.css']
})

export class FeedEventComponent implements OnInit, OnChanges {
  
  @Input()
  data: IFeedItem;

  currentData: IFeedItem;
  companyName: string = "";
  eventType: string = "";
  eventDuration: number = 1;

  constructor() {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.data.currentValue) {
      this.currentData = changes.data.currentValue;
      this.createFeed();
    }
  }

  createFeed() {
    this.companyName = this.currentData.companyName.display;
    this.eventType = this.currentData.eventType.display;
    this.eventDuration = this.currentData.eventDuration;

  }

  ngOnInit() {
  }
}