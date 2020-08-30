import { RocketsService } from './../../Services/rockets.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() getFilteredData: EventEmitter<{
    filter: string;
    value: string;
  }> = new EventEmitter();
  @Input() value: string;
  @Input() selected: boolean;
  @Input() filter: string;

  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {}

  filterData(): void {
    if (this.filter === '&launch_year') {
      this.selected = this.rocketsService.setSelectedYear(this.value);
    }
    if (this.filter === '&launch_success') {
      this.selected = this.rocketsService.setLaunchSuccess(this.value);
    }
    if (this.filter === '&land_success') {
      this.selected = this.rocketsService.setLandSuccess(this.value);
    }
    this.getFilteredData.emit({ filter: this.filter, value: this.value });
  }
}
