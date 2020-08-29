import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  launch_year: string = '';
  launch_success: string = '';
  land_success = '';
  filterString: string = '';
  constructor(private http: HttpClient) {}

  url = 'https://api.spaceXdata.com/v3/launches?limit=100';

  getRocketLaunchData(): Observable<any> {
    return this.http.get(this.url);
  }

  getRocketLaunchFilteredData(data: {
    filter: string;
    value: string;
  }): Observable<any> {
    console.log(this.filterString);
    if (data.filter === '&launch_year') {
      this.launch_year = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + this.land_success + this.launch_year;
    }
    if (data.filter === '&launch_success') {
      this.launch_success = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + this.land_success + this.launch_year;
    }
    if (data.filter === '&land_success') {
      this.land_success = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + this.land_success + this.launch_year;
    }
    console.log(this.filterString);
    console.log(this.url + this.filterString);
    return this.http.get(this.url + this.filterString);
  }
}
