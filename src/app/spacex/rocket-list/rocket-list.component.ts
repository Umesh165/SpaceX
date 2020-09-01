import { IRocketLaunch } from './../../Models/rocketLaunch';
import { RocketsService } from './../../Services/rockets.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.css'],
})
export class RocketListComponent implements OnInit {
  @Input() rocketLaunchData: IRocketLaunch[];
  @Input() isEmpty: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.rocketLaunchData);
  }
}
