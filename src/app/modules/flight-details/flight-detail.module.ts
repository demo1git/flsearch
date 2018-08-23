import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlightDetailComponent } from './component/fligit-detail.component';

@NgModule({
  declarations: [
    FlightDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FlightDetailComponent]
})
export class FlightDetailModule { }
