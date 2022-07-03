import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';


@NgModule({
  declarations: [
    ListHospitalComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ]
})
export class HospitalModule { }
