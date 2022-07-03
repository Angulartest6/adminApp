import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHospitalComponent } from './list-hospital/list-hospital.component';

const routes: Routes = [
  {
    
    path:'list-hospital',
    component: ListHospitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
