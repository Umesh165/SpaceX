import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Output('getFilteredData') getFilteredData: EventEmitter<
    string
  > = new EventEmitter();
  launchYears = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  successfullLanding = ['true', 'false'];
  successfullLaunch = ['true', 'false'];

  constructor() {}

  ngOnInit(): void {}
}
