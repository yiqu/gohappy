import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { delay, map, timeout, retry, retryWhen, delayWhen, tap, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'
});

@Injectable()
export class CrudService {

  private baseUrl: string = "assets/";

  constructor(private http: HttpClient) {

  }

  /**
   * HTTP GET
   * @param url 
   */
  read<T>(url: string): Observable<HttpResponse<T>> {
    const urlString: string = this.baseUrl + url + ".json";
    return this.http.get<T>(urlString, {
      headers: headers, 
      observe: 'response', 
      responseType: 'json'
    });
  }
}