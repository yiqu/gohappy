import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { delay, map, timeout, retry, retryWhen, delayWhen, tap, take } from 'rxjs/operators';
import { CrudService } from './crud.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { IResponse } from '../models/IResponse.model';

@Injectable()
export class DataService {

  private testDelay: number = 0;

  constructor(public cs: CrudService) {
    this.testDelay = environment.testDelay;
  }

  /**
   * Query for main feed data
   */
  getFeedData(): Observable<HttpResponse<IResponse>>  {
    let url: string = "dev-data";
    return this.cs.read<IResponse>(url).pipe(
      delay(this.testDelay)
    )
  }
}