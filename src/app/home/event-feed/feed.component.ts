import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { IResponse, IFeedItem, EventItem } from './../../shared/models/IResponse.model';
import { Utils } from '../../shared/utils';
import { DataService } from '../../shared/service/data.service';

@Component({
  selector: 'app-home-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class HomeFeedComponent implements OnInit, OnChanges {

  @Input()
  data: EventItem[];

  feedItems: EventItem[] = [];
  upcomingTitleText: string = "Upcoming Events";
  endOfUpcomingText: string = "";

  constructor(public ds: DataService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.feedItems = changes.data.currentValue.slice();
    if (this.feedItems.length > 0) {
      this.endOfUpcomingText = "That's it for upcoming events!";
    } else {
      this.endOfUpcomingText = "";
    }
  }

  ngOnInit() {
    Utils.enableJqueryTooltip();
  }
}