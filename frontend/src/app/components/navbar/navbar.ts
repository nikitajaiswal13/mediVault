import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../../pages/login/login';
import { Signup } from '../../pages/signup/signup';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }


  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  openLogin() {
    this.dialog.open(Login, {
      width: '400px'
    });
  }


  openSignup() {
    this.dialog.open(Signup, {
      width: '420px'
    });
  }


  logout() {
    const confirmed = confirm('Are you sure you want to logout?');

    if (confirmed) {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }
  }
}