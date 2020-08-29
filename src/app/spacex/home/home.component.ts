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
  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.rocketLaunchData$ = this.rocketsService.getRocketLaunchData();
  }
}
