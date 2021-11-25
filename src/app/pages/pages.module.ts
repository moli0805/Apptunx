import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { BuildingCardModule } from '../component/building-card/building-card.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path:'', component: BuildingDetailComponent}
]

@NgModule({
  declarations: [
    BuildingDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BuildingCardModule,
    SharedModule
  ]
})
export class PagesModule { }
