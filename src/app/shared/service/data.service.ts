import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, timer, throwError } from 'rxjs';
import { delay, map, timeout, retry, retryWhen, catchError } from 'rxjs/operators';
import { CrudService } from './crud.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { IResponse, EventItem, IFeedItem } from '../models/IResponse.model';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class DataService {

  private testDelay: number = 0;
  private startOfToday: moment.Moment = moment().startOf('day');
  public upcomingEvents: EventItem[] = [];
  public pastEvents: EventItem[] = [];
  public pastEventExist: boolean = false;


  constructor(public cs: CrudService) {
    this.testDelay = environment.testDelay;
  }

  /**
   * Query for main feed data. Only return upcoming events
   * place the past events into pastEvents[] list
   */
  getFeedData(): Observable<IFeedItem[]>  {
    let url: string = "dev-data-single";
    return this.cs.read<IResponse>(url).pipe(
      delay(this.testDelay),
      map((val) => {
        const todayEpoch: number = this.startOfToday.valueOf();
        // get only upcoming events
        let upcoming: any = _.filter(val.body.items.slice(), 
          (item: IFeedItem) => {
            if (+item.startTime > todayEpoch) {
              return item;
            } else {
              this.pastEventExist = true;
              this.pastEvents.push(item);
            }
        });
        let sorted = _.sortBy(upcoming, 'startTime');
        return sorted;
      }),
      catchError(
        (error) => {
          return throwError(error);
        }
      )
    )
  }
}