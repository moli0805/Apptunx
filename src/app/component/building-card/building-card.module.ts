import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingCardComponent } from './building-card.component';



@NgModule({
  declarations: [
    BuildingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BuildingCardComponent]
})
export class BuildingCardModule { }
