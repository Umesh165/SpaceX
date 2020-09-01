import { async } from '@angular/core/testing';
import { RocketsService } from './../../Services/rockets.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rocketLaunchData: [];
  isFetching: boolean;
  isEmpty: boolean = false;
  subscribtion: Subscription;
  errors: boolean;
  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.errors = false;
    this.isEmpty = false;
    this.isFetching = true;
    this.subscribtion = this.rocketsService.getRocketLaunchData().subscribe(
      (data) => {
        this.rocketLaunchData = data;
        if (this.rocketLaunchData.length === 0) {
          console.log('true');
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

  getFilteredData = (data: { filter: string; value: string }): void => {
    this.errors = false;
    this.isEmpty = false;
    this.isFetching = true;
    this.rocketsService.getRocketLaunchFilteredData(data).subscribe(
      (data) => {
        this.rocketLaunchData = data;
        if (this.rocketLaunchData.length === 0) {
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

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
