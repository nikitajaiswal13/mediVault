import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router
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
        console.log(res);
        this.router.navigate(['/patients']);
      });
  }
}
