import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup;
  private baseUrl = 'http://localhost:3000/api/v1/users';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.http.post(`${this.baseUrl}/login`, this.loginForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/patients']);
      });
  }
}
