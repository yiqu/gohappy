import * as moment from 'moment';

const DISPLAY_FORMAT: string = 'ddd M/D hh:mm A';
const DISPLAY_FORMAT_YEAR: string = 'ddd M/D/YY hh:mm A';
const DETAIL_FORMAT: string = "ddd MM/DD/YYYY hh:mm A";

export class EventDate {
  constructor(public epoch: number = 0) {
    
  }

  public getDisplay(): string {
    return moment(new Date(this.epoch)).format(DISPLAY_FORMAT);
  }

  public getDisplayWithYear(): string {
    return moment(new Date(this.epoch)).format(DISPLAY_FORMAT_YEAR);
  }

  public getDetailed(): string {
    return moment(new Date(this.epoch)).format(DETAIL_FORMAT);
  }

  public getTooltip(): string {
    return "Event starts on " + this.getDetailed() + ".";
  }
}