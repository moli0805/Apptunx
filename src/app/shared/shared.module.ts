import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [HeaderComponent,FooterComponent,FilterComponent]
})
export class SharedModule { }
