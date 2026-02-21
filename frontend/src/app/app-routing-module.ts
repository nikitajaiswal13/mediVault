import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Patients } from './pages/patients/patients';
import { Records } from './pages/records/records';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'patients', component: Patients },
  { path: 'records/:patientId', component: Records }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}