import { filterUrlValue } from './../../Models/filterUrlValue';
import { IRocketLaunch } from './../../Models/rocketLaunch';
import { RocketsService } from './../../Services/rockets.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  rocketLaunchData: IRocketLaunch[];
  isFetching: boolean;
  isEmpty: boolean;
  subscribtion: Subscription;
  errors: boolean;
  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.errors = false;
    this.isEmpty = false;
    this.isFetching = true;
    this.subscribtion = this.rocketsService.getRocketLaunchData().subscribe(
      (data: IRocketLaunch[]) => {
        this.rocketLaunchData = data;
        if (Object.keys(this.rocketLaunchData).length === 0) {
          this.isEmpty = true;
        }
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.errors = true;
        console.log(error);
      }
    );
  }

  getFilteredData = (data: filterUrlValue): void => {
    this.errors = false;
    this.isEmpty = false;
    this.isFetching = true;
    this.rocketsService.getRocketLaunchFilteredData(data).subscribe(
      (filteredData: IRocketLaunch[]) => {
        this.rocketLaunchData = filteredData;
        console.log();
        if (Object.keys(this.rocketLaunchData).length === 0) {
          this.isEmpty = true;
        }
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.errors = true;
        console.log(error);
      }
    );
  };

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
