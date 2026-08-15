import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credentials = {
    name: '',
    email: '',
    password: ''
  };

  formError = '';

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required.';
      return;
    }

    const user: User = {
      name: this.credentials.name,
      email: this.credentials.email
    };

    this.authenticationService.login(
      user,
      this.credentials.password
    );
  }
}
