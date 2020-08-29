import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css'],
})
export class RocketCardComponent implements OnInit {
  @Input() rocketLaunch: any;

  constructor() {}

  ngOnInit(): void {}
}
