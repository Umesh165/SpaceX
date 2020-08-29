import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketListComponent } from './rocket-list/rocket-list.component';
import { RocketCardComponent } from './rocket-card/rocket-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [RocketListComponent, RocketCardComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class SpacexModule {}
