import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../login/login';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  signupForm: FormGroup;
  private baseUrl = 'http://localhost:3000/api/v1/users';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirm: ['']
    });
  }

  onSubmit() {
    this.http.post(`${this.baseUrl}/signup`, this.signupForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.dialog.closeAll();   // close popup
        this.router.navigate(['/patients']);
      });
  }

  openLogin() {
    this.dialog.closeAll();  // close signup popup
    this.dialog.open(Login, {
      width: '420px'
    });
  }
}