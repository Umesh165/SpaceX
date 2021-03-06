import { filterUrlValue } from './../Models/filterUrlValue';
import { IRocketLaunch } from './../Models/rocketLaunch';
import {
  launchYears,
  successfullLaunch,
  successfullLanding,
} from './../../assets/filtersData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  launchYear = '';
  launchSuccess = '';
  landSuccess = '';
  filterString = '';
  constructor(private http: HttpClient) {}

  url = 'https://api.spaceXdata.com/v3/launches?limit=100';

  getRocketLaunchData(): Observable<IRocketLaunch[]> {
    return this.http.get<IRocketLaunch[]>(this.url);
  }

  getRocketLaunchFilteredData(
    data: filterUrlValue
  ): Observable<IRocketLaunch[]> {
    if (data.filter === '&launch_year') {
      if (this.launchYear === data.filter + '=' + data.value) {
        this.filterString = this.filterString.replace(
          data.filter + '=' + data.value,
          ''
        );
        this.launchYear = '';
      } else {
        this.launchYear = data.filter + '=' + data.value;
        this.filterString =
          this.launchSuccess + this.landSuccess + this.launchYear;
      }
    }
    if (data.filter === '&launch_success') {
      if (this.launchSuccess === data.filter + '=' + data.value) {
        this.filterString = this.filterString.replace(
          data.filter + '=' + data.value,
          ''
        );
        this.launchSuccess = '';
      } else {
        this.launchSuccess = data.filter + '=' + data.value;
        this.filterString =
          this.launchSuccess + this.landSuccess + this.launchYear;
      }
    }
    if (data.filter === '&land_success') {
      if (this.landSuccess === data.filter + '=' + data.value) {
        this.filterString = this.filterString.replace(
          data.filter + '=' + data.value,
          ''
        );
        this.landSuccess = '';
      } else {
        this.landSuccess = data.filter + '=' + data.value;
        this.filterString =
          this.launchSuccess + this.landSuccess + this.launchYear;
      }
    }
    console.log(this.url + this.filterString);
    return this.http.get<IRocketLaunch[]>(this.url + this.filterString);
  }

  setSelectedYear(year: string): boolean {
    let state: boolean;
    launchYears.forEach((item) => {
      if (item.value === year) {
        state = !item.selected;
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
    return state;
  }

  setLaunchSuccess(value: string): boolean {
    let state: boolean;
    successfullLaunch.forEach((item) => {
      if (item.value === value) {
        state = !item.selected;
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
    return state;
  }

  setLandSuccess(value: string): boolean {
    let state: boolean;
    successfullLanding.forEach((item) => {
      if (item.value === value) {
        state = !item.selected;
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
    return state;
  }
}
