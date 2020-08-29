import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.css'],
})
export class RocketListComponent implements OnInit {
  @Input() rocketLaunchData$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}
}
