import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { RocketCardComponent } from './rocket-card/rocket-card.component';
import { HomeComponent } from './home/home.component';
import { FiltersComponent } from './filters/filters.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RocketListComponent,
    RocketCardComponent,
    HomeComponent,
    FiltersComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class SpacexModule {}
