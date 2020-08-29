import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  constructor(private http: HttpClient) {}

  getRocketLaunchData(): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }
}
