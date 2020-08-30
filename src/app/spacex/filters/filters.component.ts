import {
  launchYears,
  successfullLanding,
  successfullLaunch,
} from './../../../assets/filtersData';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output() getFilteredData: EventEmitter<string> = new EventEmitter();
  launchYears = launchYears;
  successfullLanding = successfullLanding;
  successfullLaunch = successfullLaunch;

  constructor() {}

  ngOnInit(): void {}
}
