'use strict';

import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import appConfig from './app.config';

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error:', error.error.message);
      return throwError(error);
    }
  }

  public getAllBreeds(): Observable<HttpResponse<any>> {
    const fullUrl: string = appConfig.API_URL + 'breeds';
    try {
      return this.httpClient.get<any>(fullUrl).pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError(error => {
            return this.handleError(error);
        })
      );
    } catch (err) {
      throw new (err);
    }
  }

  public insertBreed(name:string): Observable<HttpResponse<any>> {
    const fullUrl: string = appConfig.API_URL + 'breeds';
    const request = {name: name};
    try {
      return this.httpClient.post<any>(fullUrl, request).pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError(error => {
          return this.handleError(error);
        })
      );
    } catch (err) {
      throw new (err);
    }
  }

}
