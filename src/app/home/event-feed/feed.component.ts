import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { IResponse, IFeedItem } from './../../shared/models/IResponse.model';

@Component({
  selector: 'app-home-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class HomeFeedComponent implements OnInit, OnChanges {

  @Input()
  data: IResponse;

  feedItems: IFeedItem[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.feedItems = changes.data.currentValue.items.slice();
  }

  ngOnInit() {
  }
}