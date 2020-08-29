import { RocketsService } from './../../Services/rockets.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rocketLaunchData$: Observable<any>;
  launch_year: string = '';
  launch_success: string = '';
  land_success = '';
  filterString: string = '';
  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.rocketLaunchData$ = this.rocketsService.getRocketLaunchData();
  }

  getFilteredData = (data): void => {
    console.log(data);
    if (data.filter === 'launch_year') {
      this.launch_year = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + '&' + this.land_success + '&' + this.launch_year;
    }
    if (data.filter === 'launch_success') {
      this.launch_success = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + '&' + this.land_success + '&' + this.launch_year;
    }
    if (data.filter === 'land_success') {
      this.land_success = data.filter + '=' + data.value;
      this.filterString =
        this.launch_success + '&' + this.land_success + '&' + this.launch_year;
    }
    console.log(this.filterString);
    this.rocketLaunchData$ = this.rocketsService.getRocketLaunchFilteredData(
      this.filterString
    );
  };
}
