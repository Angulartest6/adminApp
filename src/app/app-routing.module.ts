import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

{path : 'dashboard' , component: DashboardComponent,
children:[
  {path:'doctor' , loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule)},
  {path:'hospital' , loadChildren: () => import('./hospital/hospital.module').then(m => m.HospitalModule)},
  {path:'patient' , loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)},
  {path:'admin-profile',component:AdminProfileComponent},
  {path : 'home', component:HomeComponent},
 
]},
{path:'auth' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution: 'legacy'}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
