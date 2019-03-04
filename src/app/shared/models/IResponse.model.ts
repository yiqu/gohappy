export interface IResponse {
  total_count: number;
  items: IFeedItem[];
}

export interface IFeedItem {
  companyName: ICompanyName;
  companyImageUrl: string;
  startTime: number;
  eventDuration: number;
  eventType: IEventType;
  eventLocation: IEventLocation;
  eventStatus: IEventStatus;
  eventStats: IEventStats;
}

export interface IEventLocation {
  address: string;
  name: string;
}

export interface ICompanyName {
  display: string;
  abbrev: string;
  id: string;
}

export interface IEventType {
  display: string;
  abbrev: string;
  id: string;
}

export interface IHappyItem {
  display: string;
  abbrev: string;
  id: string;
}

export interface IEventStatus {
  description: string;
  rsvpLink: string;
  openBar: number;
  raffle: number;
  food: number;
  status: IHappyItem;
}

export interface IEventStats {
  going: number;
  interested: number;
}
