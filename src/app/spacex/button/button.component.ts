import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output('getFilteredData') getFilteredData: EventEmitter<{
    filter: string;
    value: string;
  }> = new EventEmitter();
  @Input() value: string;
  @Input() filter: string;

  constructor() {}

  ngOnInit(): void {}

  filterData() {
    console.log('fs');
    this.getFilteredData.emit({ filter: this.filter, value: this.value });
  }
}
