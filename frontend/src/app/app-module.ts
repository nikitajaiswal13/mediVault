import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Patients } from './pages/patients/patients';
import { Records } from './pages/records/records';
import { Navbar } from './components/navbar/navbar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    App,
    Login,
    Signup,
    Patients,
    Records,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
MatToolbarModule,
MatButtonModule,
MatCardModule,
MatInputModule,
MatFormFieldModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
