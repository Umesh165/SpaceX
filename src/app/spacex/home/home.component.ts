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
  isFetching: boolean;
  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.rocketLaunchData$ = this.rocketsService.getRocketLaunchData();
    this.isFetching = false;
  }

  getFilteredData = (data: { filter: string; value: string }): void => {
    this.rocketLaunchData$ = this.rocketsService.getRocketLaunchFilteredData(
      data
    );
  };
}
