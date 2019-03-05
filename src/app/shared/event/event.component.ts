import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { IFeedItem } from '../models/IResponse.model'
import { EventSummary } from '../models/event-summary.model';
import * as moment from 'moment';
import { EventDate } from '../models/event-date.model';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
  eventLocation: string = "";
  eventAddress: string = "";
  eventStartTime: EventDate = new EventDate();
  description: string = "";
  eventImgUrl: string = "";
  startTimeTooltip: string = "";

  subTitleItems: EventSummary[] = [];

  constructor() {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.data.currentValue) {
      this.currentData = changes.data.currentValue;
      this.createFeed();
      this.subTitleItems = this.createSummarySubTitle();
    }
  }

  ngOnInit() {
    console.log(this.currentData)
  }

  createFeed() {
    this.companyName = this.currentData.companyName.display;
    this.eventType = this.currentData.eventType.display;
    this.eventDuration = this.currentData.eventDuration;
    this.eventLocation = this.currentData.eventLocation.name;
    this.eventAddress = this.currentData.eventLocation.address;
    this.eventStartTime = new EventDate(this.currentData.startTime);
    this.startTimeTooltip = this.eventStartTime.getTooltip();
    this.description = this.currentData.eventStatus.description;
    this.eventImgUrl = this.currentData.eventStatus.eventImgUrl;

  }

  createSummarySubTitle(): EventSummary[] {
    let listOfItems: EventSummary[] = [];
    const eventType = new EventSummary(this.eventType, "group");
    const eventLocation = new EventSummary(this.eventLocation, "store_mall_directory");
    const eventStartTime = new EventSummary(this.eventStartTime.getDisplay(), 
      "access_time", this.eventStartTime.getTooltip());

    listOfItems.push(eventType, eventLocation, eventStartTime);
    return listOfItems;
  }

 
}